#!/usr/bin/env python3
"""Close-paraphrase check: shared word sequences between articles and their source pages.

Usage: python3 lib/originality.py <sources-dir-with-.html-files> <article.md> [...]
Download each article's non-official source pages into the folder first (curl -sL -A "Mozilla/5.0").
Tables are ignored. Flags any shared 10-word sequence and more than 15 shared 6-word sequences
with one source. Official game text (ability, set and weapon descriptions) can trip short matches;
judge those by eye.
"""
import glob, html, os, re, sys

def words(path):
    t = open(path, errors="ignore").read()
    if path.endswith(".html"):
        t = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", "", t)
        t = html.unescape(re.sub(r"<[^>]+>", " ", t))
    else:
        t = t.split("\n---\n", 1)[-1]
        t = re.sub(r"\|[^\n]*", "", t)
    return re.findall(r"[a-z0-9']+", t.lower())

def grams(w, n):
    return {" ".join(w[i:i + n]) for i in range(len(w) - n + 1)}

srcdir, arts = sys.argv[1], sys.argv[2:]
sources = {os.path.basename(p): words(p) for p in glob.glob(os.path.join(srcdir, "*.html"))}
bad = 0
for a in arts:
    w = words(a)
    for name, sw in sources.items():
        g6, g10 = grams(w, 6) & grams(sw, 6), grams(w, 10) & grams(sw, 10)
        if g10 or len(g6) > 15:
            bad += 1
            print(f"FLAG {os.path.basename(a)} vs {name}: {len(g6)} six-word, {len(g10)} ten-word matches")
            for s in list(g10)[:5]: print("   ", s)
print(f"originality: {len(arts)} article(s), {len(sources)} source page(s), {bad} flag(s)")
sys.exit(1 if bad else 0)
