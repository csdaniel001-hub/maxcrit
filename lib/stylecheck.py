#!/usr/bin/env python3
"""MaxCrit style checker (standalone). Python 3.8+, standard library only.

Run it on one article or a folder of articles before delivering a package:

    python3 stylecheck.py articles/
    python3 stylecheck.py articles/my-guide.md

ERROR  breaks the MaxCrit build (lib/check.js fails on it). Fix before delivery.
WARN   house-style habit or banned filler that the build only warns about.
       Fix it, or keep it only when the sentence really needs it.
INFO   package housekeeping (image fields, published_at).

Exit code 1 if any ERROR was found. lib/check.js runs this same file with
--json and reports its WARN lines, so there is one rule set for everyone.
"""
import json
import os
import re
import sys

# ---------------------------------------------------------------- rules
# Keep STOCK in sync with SLOP in lib/check.js (check.js treats these as errors).
STOCK = [
    "in the ever-evolving", "ever-changing world", "it's worth noting", "it is worth noting",
    "it's important to note", "delve into", "dive into", "game-changer", "game changer",
    "takes it to the next level", "next level", "elevate your", "unleash", "embark on",
    "a testament to", "whether you're a seasoned", "seasoned veteran or", "something for everyone",
    "only time will tell", "stay tuned", "without further ado", "in conclusion", "all in all",
    "buckle up", "look no further", "breathtaking", "jaw-dropping", "immersive experience",
    "unforgettable experience", "rich tapestry", "boasts", "a must-play", "fans will be thrilled",
    "exciting times", "if you only read", "the part worth", "worth flagging", "worth watching",
    "changes the math", "the key point", "middle ground", "here's why", "the bottom line",
    "in short,", "let's ", "whether you're", "it's not just", "not just about", "more than just",
    "at the end of the day", "the real story", "here's the thing", "make no mistake",
    "needless to say", "in a nutshell", "the good news is", "the bad news is",
]

# Source-attribution sentences (warnings). Official facts are stated plainly: the
# sources box carries attribution. Keep in-text attribution for reported, disputed
# or quoted claims only (codes pages are exempt: trackers are the point there).
ATTR_SRC = re.compile(r"\b(?:the|its|their|this|that|[A-Z][\w']+'s)\s+(?:official\s+|\[)?(?:[\w-]+\s+){0,3}?(?:notice|notes|letter|announcement|post|preview|blog|statement|press release|feature|recap|listing|overview|FAQ|tweet|article|feed|guide)\b", re.I)
ATTR_VERB = re.compile(r"\b(?:says|said|states|stated|lists|listed|confirms|confirmed|describes|described|outlines|puts|explains|introduces|credits|warns|announces|announced|documents|mentions|specifies)\b", re.I)
ATTR_ACC = re.compile(r"\baccording to\b", re.I)

# Extra reader-steering frames (warnings).
STEERING = ["worth acting on", "the sensible", "here is why", "what this means for you",
            "the takeaway", "key takeaway", "the short version"]

# "The source doesn't say" filler, banned since 2026-11-24 (warnings: regexes can misfire).
FILLER = [
    r"\b(does|do|did)(n't| not) (say|specify|establish|confirm|mention|list|give|state|detail|reveal)\b",
    r"\b(is|are|was|were)(n't| not) (yet )?(known|confirmed|specified|announced|disclosed|clear)\b",
    r"\bha(s|ve)(n't| not) (yet )?been (announced|confirmed|revealed|specified|disclosed|shared)\b",
    r"\b(no|without an?) (official )?(release )?(date|details?|figures?) (has|have|was|were) (been )?(given|announced|shared)\b",
    r"\bcheck (the game|in-game|in game|the in-game)\b(?!'s (terms|rules|current|policy|policies))(?! (reward|mail|mailbox|notification|inbox))",
    r"\b(TBA|TBD|TBC)\b",
    r"\bremains? (unknown|unclear|unconfirmed)\b",
    r"\bwe (do not|don't) (yet )?know\b",
]

# "X, not Y" as a habit. Each hit is listed; 3+ in one article is flagged as a habit.
CONTRAST = [
    (r", not (a|an|the|just|only|every|all|as|by|to|for|in|on|at|from|with|because|what|whether|how|why|\w+ing\b)", '", not ..." contrast'),
    (r"(^|[.!?]\s+)(It|This|That|These|Those)( is|'s| are|'re) not (a|an|the|just|about)\b", 'sentence opening with "It is not / This is not"'),
    (r"\brather than\b", '"rather than" contrast'),
    (r"\binstead of (just|simply|merely)\b", '"instead of just" contrast'),
]

REQUIRED = ["title", "seo_title", "summary", "keyword", "sources", "platforms"]

# Official game names that contain a colon (a colon inside them is not a colon subhead).
COLON_NAMES = ["Arknights: Endfield", "BLEACH: Soul Resonance", "Call of Duty: Mobile",
               "Call of Duty: Warzone Mobile", "CookieRun: Kingdom", "Etheria: Restart",
               "Girls' Frontline 2: Exilium", "Goddess of Victory: NIKKE", "Honkai: Nexus Anima",
               "Honkai: Star Rail", "League of Legends: Wild Rift", "Mobile Legends: Bang Bang",
               "Punishing: Gray Raven", "RAID: Shadow Legends", "Reverse: 1999",
               "Sky: Children of the Light", "Solo Leveling:Arise", "Solo Leveling: Arise",
               "TFT: Teamfight Tactics", "The Seven Deadly Sins: Grand Cross", "Tower of God: NEW WORLD",
               "Star Wars: Galaxy of Heroes", "Final Fantasy VII: Ever Crisis", "Persona5: The Phantom X"]


def _load_repo_colon_names():
    """Inside the MaxCrit repo, add colon names from src/_data/games.yml (games added later)."""
    here = os.path.dirname(os.path.abspath(__file__))
    for cand in (os.path.join(here, "..", "src", "_data", "games.yml"), os.path.join("src", "_data", "games.yml")):
        if os.path.exists(cand):
            for m in re.finditer(r"name:\s*[\"']?([^\"'\n]*:[^\"'\n]*)", open(cand, encoding="utf-8").read()):
                n = m.group(1).strip()
                if n not in COLON_NAMES:
                    COLON_NAMES.append(n)
            return


_load_repo_colon_names()


# ---------------------------------------------------------------- front matter
def parse_front_matter(text):
    """Return (fm dict, body, body_start_line). Uses PyYAML if available."""
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n?", text, re.S)
    if not m:
        return {}, text, 1
    head, body = m.group(1), text[m.end():]
    start = text[: m.end()].count("\n") + 1
    try:
        import yaml  # type: ignore
        fm = yaml.safe_load(head) or {}
        return (fm if isinstance(fm, dict) else {}), body, start
    except Exception:
        pass
    fm, key = {}, None
    for line in head.split("\n"):
        if not line.strip():
            continue
        km = re.match(r"^([A-Za-z_][\w-]*):\s*(.*)$", line)
        if km and not line.startswith(" "):
            key, val = km.group(1), km.group(2).strip()
            fm[key] = [] if val in ("", "[]") else _unq(val)
            continue
        lm = re.match(r"^-\s+(.*)$", line)
        if lm and key is not None:
            if not isinstance(fm.get(key), list):
                fm[key] = []
            fm[key].append(_unq(lm.group(1).strip()))
        elif key is not None and line.startswith(" "):
            if isinstance(fm.get(key), list) and fm[key]:
                last = fm[key][-1]
                if isinstance(last, str):
                    fm[key][-1] = last + " " + _unq(line.strip())
            elif isinstance(fm.get(key), str):
                fm[key] = fm[key] + " " + _unq(line.strip())
    return fm, body, start


def _unq(v):
    if len(v) >= 2 and v[0] == v[-1] and v[0] in "'\"":
        v = v[1:-1]
        v = v.replace("''", "'") if v else v
    return v


# ---------------------------------------------------------------- helpers
def prose_words(body, hub_type=None):
    """Same count as lib/check.js: tables are excluded except on patch trackers, events and banners."""
    text = re.sub(r"\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\}", " ", body)
    text = re.sub(r"<[^>]+>", " ", text)
    if hub_type not in ("patch-trackers", "events", "banners"):
        text = "\n".join(l for l in text.split("\n") if not re.match(r"^\s*\|", l))
    return len(re.sub(r"[#*_>`|-]", " ", text).split())


def colon_head(h):
    for n in COLON_NAMES:
        h = h.replace(n, "")
    return ":" in h


def check_file(path):
    issues = []
    text = open(path, encoding="utf-8").read()
    if not text.lstrip().startswith("---"):
        return []  # evidence notes, READMEs and other files without front matter are not articles
    fm, body, start = parse_front_matter(text)

    def add(level, msg, line=None):
        issues.append({"file": path, "level": level, "line": line, "msg": msg})

    is_hub = bool(fm.get("hub_type"))
    short = fm.get("type") == "short"
    tldr = fm.get("tldr") or []
    if not isinstance(tldr, list):
        tldr = [str(tldr)]
    tldr = [str(t) for t in tldr]

    # front matter
    for k in REQUIRED:
        if k not in fm or fm.get(k) in (None, "", []) and k != "platforms":
            add("ERROR", f"missing front matter field: {k}")
    if not fm.get("genres") and not fm.get("roundup"):
        add("ERROR", "genres is empty (set one main genre, or roundup: true for multi-game roundups)")
    st = str(fm.get("seo_title") or "")
    if st and not 30 <= len(st) <= 60:
        add("ERROR", f"seo_title is {len(st)} characters (30-60)")
    sm = str(fm.get("summary") or "")
    if sm and not 120 <= len(sm) <= 160:
        add("ERROR", f"summary is {len(sm)} characters (120-160)")
    h2 = len(re.findall(r"^## ", body, re.M))
    words = prose_words(body, fm.get("hub_type"))
    # News under 500 words: TL;DR and subheads optional (Daniel, 2026-11-25)
    brief = short or (not is_hub and words < 500)
    if not brief:
        if h2 < 2:
            add("ERROR", f"needs at least 2 H2 subheadings (has {h2})")
        if not 2 <= len(tldr) <= 5:
            add("ERROR", f"tldr needs 2-5 points (has {len(tldr)})")
    elif tldr and not 2 <= len(tldr) <= 5:
        add("ERROR", f"tldr needs 2-5 points when used (has {len(tldr)})")
    if is_hub:
        floor = 200 if fm.get("hub_type") in ("patch-trackers", "events", "banners") else 250
    else:
        floor = 150 if short else 300
    if words < floor:
        add("ERROR", f"{words} words of prose, minimum {floor} (tables do not count)")
    if not is_hub and not short and words > 1100:
        add("ERROR", f"{words} words of prose, news maximum is 1100")
    if fm.get("hub_type") == "builds":
        # Build completeness spec (docs/build-page-spec.md): same rule as lib/check.js
        heads = "\n".join(re.findall(r"^###? .*$", body, re.M)).lower()
        need = {"kit overview": r"how .* (plays|works|deals|fights|supports|heals|turns|changes)|kit|playstyle|what .* (does|adds|needs)", "stats": r"stat|energy regen|mastery|proficiency|hp investment|crit|speed tuning|spd",
                "weapons": r"weapon|light cone|w-engine|rectifier|bow|claymore|catalyst|sword|polearm", "sets": r"artifact|relic|echo|drive disc|disc 5|ornament",
                "teams": r"team", "rotation": r"rotation|how to play|gameplay|turn order", "skill priority": r"talent|trace|forte|skill|upgrade",
                "duplicates": r"constellation|eidolon|sequence|resonance chain|mindscape", "materials": r"material|ascension|farm"}
        omit = [str(x).lower() for x in (fm.get("spec_omit") or [])]
        miss = [k for k, rx in need.items() if not re.search(rx, heads) and k not in omit]
        if miss:
            add("ERROR", "build missing spec sections (H2 headings): " + ", ".join(miss) + " (or declare spec_omit with a reason in the verification record)")
        if words < 700:
            add("ERROR", f"build has {words} words of prose (spec target 900+, floor 700)")
    tier = str(fm.get("tier") or "")
    if tier in ("2", "3") and not fm.get("review_by"):
        add("WARN", f"tier {tier} piece without review_by")
    if fm.get("published_at"):
        add("INFO", "published_at is set; Claude sets it at actual publication, so it can be left out")
    if not fm.get("image") and not fm.get("image_url"):
        add("INFO", "no image proposed: add an official image URL (1000 px+, no real people), its rights holder and source page")

    # TL;DR
    for t in tldr:
        if "**" in t:
            add("ERROR", f'tldr uses **markdown bold**, use <b>...</b>: "{t[:60]}"')
        if len(re.findall(r"<b>", t)) > 1:
            add("ERROR", f'more than one bold phrase in a TL;DR bullet: "{t[:60]}"')

    allow = [str(a).lower() for a in (fm.get("allow_phrases") or [])]
    head_text = " ".join([str(fm.get("title") or ""), sm] + tldr)
    if "—" in head_text:
        add("ERROR", "em dash in title, summary or tldr")
    for ph in STOCK:
        if ph in head_text.lower() and ph not in allow:
            add("ERROR", f'stock phrase in title, summary or tldr: "{ph}"')

    # body, line by line
    colon_heads = []
    contrast_hits = 0
    attr_hits = 0
    attr_lines = []
    for i, line in enumerate(body.split("\n")):
        ln = start + i
        low = line.lower()
        is_table = line.lstrip().startswith("|")
        if "—" in line:
            add("ERROR", "em dash: rewrite the sentence", ln)
        for ph in STOCK:
            if ph in low and ph not in allow:
                add("ERROR", f'stock phrase: "{ph}"', ln)
        for ph in STEERING:
            if ph in low:
                add("WARN", f'reader-steering frame: "{ph}"', ln)
        if not is_table:
            label = re.match(r"^- \*\*[^*]+\*\*", line)
            rest = line[label.end():] if label else line
            if re.search(r"\*\*[^*]+\*\*|<b>|<strong>", rest):
                add("ERROR", "bold inside running text (bold is only for list-item labels)", ln)
        if re.search(r"\bnot (just|only|merely) [^.]{1,60}, but\b", line, re.I):
            add("ERROR", '"not just X, but Y" construction', ln)
        if line.startswith("## "):
            if colon_head(line):
                colon_heads.append(ln)
            if re.match(r"^## (Step|Part|Phase) \d+\s*[:.]", line, re.I):
                add("WARN", 'numbered "Step N:" subhead: use a plain sentence heading', ln)
        if line.startswith("#"):
            continue
        for rx in FILLER:
            m = re.search(rx, line, re.I)
            if m:
                add("WARN", f'possible "we don\'t know" filler: "{m.group(0)}" (state what is known, or record the gap in the verification file)', ln)
                break
        if not is_table and fm.get("hub_type") != "codes":
            for sent in re.findall(r"[^.!?]+[.!?]?", line):
                if ATTR_ACC.search(sent) or (ATTR_SRC.search(sent) and ATTR_VERB.search(sent)):
                    attr_hits += 1
                    attr_lines.append(ln)
        for rx, label in CONTRAST:
            for m in re.finditer(rx, line, re.I):
                contrast_hits += 1
                ctx = line[max(0, m.start() - 30): m.end() + 25].strip()
                add("WARN", f'{label}: "...{ctx}..."', ln)
    # Attribution is fine when it establishes origin or credibility (Daniel, 2026-11-26);
    # only repetition is flagged.
    if len(attr_lines) >= 3:
        add("WARN", f"{len(attr_lines)} attribution sentences (lines {', '.join(map(str, attr_lines))}): keep the ones that establish where a claim comes from or how far to trust it, state the rest plainly")
    if len(colon_heads) > 1:
        add("ERROR", f"{len(colon_heads)} colon-built subheadings (maximum 1), lines {', '.join(map(str, colon_heads))}")
    if contrast_hits >= 3:
        add("WARN", f'{contrast_hits} contrast frames in one article: "X, not Y" has become a habit here, rewrite most as plain statements')
    return issues


def collect(paths):
    files = []
    for p in paths:
        if os.path.isdir(p):
            for root, _, names in os.walk(p):
                files += [os.path.join(root, n) for n in sorted(names) if n.endswith(".md") and n.lower() != "readme.md"]
        elif p.endswith(".md"):
            files.append(p)
    return files



def site_report(files):
    """Variety across several articles: shared opening moves, shared first words, pet phrases."""
    import collections
    opens = {}
    grams = collections.defaultdict(set)
    for f in files:
        text = open(f, encoding="utf-8").read()
        fm, body, _ = parse_front_matter(text)
        prose = re.sub(r"^\|.*$|^#.*$|^\s*[-*] .*$|^>.*$", "", body, flags=re.M)
        paras = [x.strip() for x in prose.split("\n\n") if len(x.strip()) > 40]
        if paras:
            s1 = re.split(r"(?<=[.!?])\s", paras[0])[0]
            low = s1.lower()
            if s1.rstrip().endswith("?"): move = "question"
            elif re.match(r"^if (you|your)\b", low): move = "if-you hook"
            elif re.match(r"^\d", s1): move = "number-led"
            elif re.search(r"\b(you|your)\b", low): move = "second person"
            elif re.match(r"^[A-Z][\w:'\s.&-]{0,60}?\b(adds|introduces|releases|launches|has released|has launched|has added|brings|gets|opens|starts|begins|announced|has announced)\b", s1): move = "game-does-X"
            else: move = "other"
            opens[f] = (move, " ".join(s1.split()[:2]).lower())
        words = re.findall(r"[a-z']+", re.sub(r"\[[^\]]*\]\([^)]*\)", " ", prose).lower())
        for i in range(len(words) - 3):
            grams[" ".join(words[i:i + 4])].add(f)
    n = len(opens) or 1
    out = []
    moves = collections.Counter(m for m, _ in opens.values())
    for m, c in moves.most_common():
        if m != "other" and c / n > 0.25 and c >= 4:
            out.append(f'opening move "{m}" used by {c} of {n} articles (keep any one move under 25%)')
    firsts = collections.Counter(w for _, w in opens.values())
    for w, c in firsts.most_common():
        if c >= 4:
            out.append(f'{c} articles open with "{w}..."')
    common = {"the", "a", "of", "to", "and", "in", "on", "for", "is", "it", "that", "you", "with", "at", "as", "be", "your", "are", "this", "from", "or", "an", "by", "can", "will", "if", "its"}
    thresh = max(5, n // 10)
    for g, fs in sorted(grams.items(), key=lambda kv: -len(kv[1])):
        if len(fs) < thresh: break
        if sum(w in common for w in g.split()) >= 3: continue
        out.append(f'pet phrase "{g}" appears in {len(fs)} articles')
    return out[:25]

def main(argv):
    as_json = "--json" in argv
    paths = [a for a in argv if not a.startswith("--")]
    if not paths:
        print(__doc__)
        return 2
    if "--site" in argv:
        files = collect(paths)
        rep = site_report(files)
        for line in rep:
            print("  SITE  " + line)
        print(f"\nstylecheck --site: {len(files)} file(s), {len(rep)} variety warning(s)")
        return 0
    issues = []
    for f in collect(paths):
        issues += check_file(f)
    if as_json:
        print(json.dumps(issues))
        return 0
    order = {"ERROR": 0, "WARN": 1, "INFO": 2}
    by_file = {}
    for it in issues:
        by_file.setdefault(it["file"], []).append(it)
    for f, its in by_file.items():
        print(f"\n{f}")
        for it in sorted(its, key=lambda x: (order[x["level"]], x["line"] or 0)):
            where = f"line {it['line']}: " if it["line"] else ""
            print(f"  {it['level']:<5} {where}{it['msg']}")
    n_err = sum(1 for i in issues if i["level"] == "ERROR")
    n_warn = sum(1 for i in issues if i["level"] == "WARN")
    files = collect(paths)
    print(f"\nstylecheck: {len(files)} file(s), {n_err} error(s), {n_warn} warning(s)")
    if n_err == 0 and n_warn == 0:
        print("Clean. Ready for delivery.")
    return 1 if n_err else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
