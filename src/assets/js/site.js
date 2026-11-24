(function () {
  // Elements that slide in on scroll
  if ('IntersectionObserver' in window && !document.querySelector('.article') && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    var els = document.querySelectorAll('.top-item, .newslist.river > a, .dept, .wk, .card, .guide, .sbox, .rec, .calcol, .rbox');
    if (els.length) {
      document.documentElement.classList.add('js-rv');
      var io = new IntersectionObserver(function (entries) {
        var k = 0;
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.style.transitionDelay = (k++ * 70) + 'ms';
          e.target.classList.add('in');
          io.unobserve(e.target);
          (function (el, d) { setTimeout(function () { el.classList.remove('rv', 'in'); el.style.transitionDelay = ''; }, 650 + d); })(e.target, (k - 1) * 70);
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      els.forEach(function (el) { el.classList.add('rv'); io.observe(el); });
    }
  }

  // Header clock
  var st = document.getElementById('sysTime');
  if (st) {
    var fmt;
    try { fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); } catch (e) {}
    var tick = function () { st.textContent = fmt ? fmt.format(new Date()) : new Date().toTimeString().slice(0, 8); };
    tick(); setInterval(tick, 1000);
  }

  // Slider
  var slider = document.getElementById('slider');
  if (slider) {
    var slides = slider.querySelectorAll('.slide');
    var bars = slider.querySelectorAll('#bars button');
    var thumbs = slider.querySelectorAll('#thumbs button');
    var i = 0, timer;
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, j) { s.classList.toggle('hidden', j !== i); });
      bars.forEach(function (b, j) { b.classList.toggle('on', j === i); });
      thumbs.forEach(function (b, j) { b.classList.toggle('on', j === i); });
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { show(i + 1); }, 7000); }
    slider.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-i]');
      if (b) { show(+b.dataset.i); restart(); }
    });
    document.getElementById('prev').addEventListener('click', function () { show(i - 1); restart(); });
    document.getElementById('nextb').addEventListener('click', function () { show(i + 1); restart(); });
    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', restart);
    restart();
  }

  // Calendar filter
  var cf = document.getElementById('calfilter');
  if (cf) {
    cf.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-k]'); if (!b) return;
      cf.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      document.querySelectorAll('#calfull a').forEach(function (a) {
        a.style.display = (b.dataset.k === 'all' || a.dataset.k === b.dataset.k) ? '' : 'none';
      });
    });
  }

  // Hungarian language DB
  var hf = document.getElementById('hufilter');
  if (hf) {
    var mode = 'all', hs = document.getElementById('husearch');
    function huRun() {
      var q = (hs.value || '').trim().toLowerCase();
      document.querySelectorAll('#hutable tr').forEach(function (r) {
        var ok = (mode === 'all' || (mode === 'yes' && r.dataset.hu === 'yes') || (mode === 'no' && r.dataset.hu === 'no') || (mode === 'mmo' && r.dataset.mmo === 'yes')) && (!q || r.dataset.text.indexOf(q) > -1);
        r.style.display = ok ? '' : 'none';
      });
    }
    hf.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-k]'); if (!b) return; mode = b.dataset.k;
      hf.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      huRun();
    });
    hs.addEventListener('input', huRun);
  }

  // Search page
  var sq = document.getElementById('sq');
  if (sq) {
    var items = document.querySelectorAll('.sitem');
    function run() {
      var q = sq.value.trim().toLowerCase(), hits = 0;
      items.forEach(function (it) { var ok = !q || it.dataset.text.indexOf(q) > -1; it.style.display = ok ? '' : 'none'; if (ok) hits++; });
      document.getElementById('snone').hidden = hits > 0;
    }
    try { var p = new URLSearchParams(location.search).get('q'); if (p) sq.value = p; } catch (e) {}
    sq.addEventListener('input', run); run();
  }

  // "/" focuses search
  document.addEventListener('keydown', function (e) {
    var tag = document.activeElement && document.activeElement.tagName;
    if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
      e.preventDefault(); var s = document.querySelector('.search input'); if (s) s.focus();
    }
  });
})();

(function () {
  var s = document.getElementById('dbsearch'), tb = document.getElementById('dbtable');
  if (!s || !tb) return;
  s.addEventListener('input', function () {
    var q = s.value.trim().toLowerCase();
    [].forEach.call(tb.querySelectorAll('tr'), function (r) { r.style.display = !q || r.getAttribute('data-text').indexOf(q) > -1 ? '' : 'none'; });
  });
})();

(function () {
  var links = document.querySelectorAll('.a-toc a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var map = {};
  [].forEach.call(links, function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { [].forEach.call(links, function (l) { l.classList.remove('on'); }); var a = map[e.target.id]; if (a) a.classList.add('on'); }
    });
  }, { rootMargin: '0px 0px -70% 0px' });
  Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
})();

// Mobile menu
(function () {
  var b = document.getElementById('menuBtn'); if (!b) return;
  var side = b.closest('.side') || b.closest('.gz-head');
  b.addEventListener('click', function () {
    var open = side.classList.toggle('open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
})();


/* MaxCrit mascot: back-to-top cat, appears after scrolling */
(function(){
  function go(){
    var b=document.querySelector('.kx-top'); if(!b)return;
    b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
    var on=false;window.addEventListener('scroll',function(){var s=window.scrollY>900;if(s!==on){on=s;b.classList.toggle('on',s);}},{passive:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();

/* "Latest" bar: one headline at a time, slides up every few seconds */
(function(){
  function go(){
    var t=document.querySelector('.gz-tick'); if(!t||t.querySelector('.kx-rot'))return;
    var src=t.querySelector('.gz-marq-in > span'); if(!src)return;
    var links=[].slice.call(src.querySelectorAll('a')).slice(0,8); if(!links.length)return;
    var rot=document.createElement('div'); rot.className='kx-rot'; rot.setAttribute('aria-live','polite');
    links.forEach(function(a,i){var c=a.cloneNode(true);if(i===0)c.className='on';rot.appendChild(c);});
    var nav=document.createElement('div'); nav.className='kx-rnav';
    nav.innerHTML='<span class="kx-cnt">1 / '+links.length+'</span><button type="button" aria-label="Previous headline">‹</button><button type="button" aria-label="Next headline">›</button>';
    var m=t.querySelector('.gz-marq'); m.style.display='none'; t.insertBefore(rot,m); t.appendChild(nav);
    var items=rot.children,i=0,n=items.length,cnt=nav.querySelector('.kx-cnt'),timer;
    function show(k,dir){var old=items[i];i=(k+n)%n;var nw=items[i];
      old.className=dir<0?'out-down':'out';nw.className=dir<0?'in-up':'';void nw.offsetWidth;nw.className='on';
      setTimeout(function(){if(old!==items[i])old.className='';},600);cnt.textContent=(i+1)+' / '+n;}
    function start(){stop();timer=setInterval(function(){show(i+1,1);},4800);}
    function stop(){clearInterval(timer);}
    nav.children[1].onclick=function(){show(i-1,-1);start();};
    nav.children[2].onclick=function(){show(i+1,1);start();};
    t.addEventListener('mouseenter',stop);t.addEventListener('mouseleave',start);
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)start();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();


/* one hover effect for every button: bar + wipe layer */
(function(){var SEL='.cc-q,.hz-b1,.hz-b2,.hz-moreb,.cc-btn,.mx-foot .hz-link,.kx-mbtn,.mc-stores a,.hz-rbh-go,.hz-tabs button,.kx-rnav button,.hz-nav button,.kx-top';
function go(){document.querySelectorAll(SEL).forEach(function(b){if(b.querySelector(':scope > .kx-fx'))return;var f=document.createElement('i');f.className='kx-fx';f.setAttribute('aria-hidden','true');b.insertBefore(f,b.firstChild);});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();setTimeout(go,1500);})();

/* lock-on hover for the side menu too */
(function(){function go(){document.querySelectorAll('.gz-side nav > a:not(.on),.gz-side .sub:not(.on)').forEach(function(b){if(b.querySelector(':scope > .kx-fx'))return;var f=document.createElement('i');f.className='kx-fx';f.setAttribute('aria-hidden','true');b.insertBefore(f,b.firstChild);});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();})();

/* Cookie consent: asks only when site.consent lists an optional service. Gated scripts are written as
   <script type="text/plain" data-consent="analytics|ads" ...> and start only after consent. */
(function(){
  var KEY='mc-consent',DAYS=365;
  function read(){try{var v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&Date.now()-v.t<DAYS*864e5)return v;}catch(e){}return null;}
  function run(c){
    document.querySelectorAll('script[type="text/plain"][data-consent]').forEach(function(s){
      if(!c[s.dataset.consent]||s.dataset.done)return;s.dataset.done='1';var n=document.createElement('script');
      [].slice.call(s.attributes).forEach(function(a){if(a.name!=='type'&&a.name!=='data-consent')n.setAttribute(a.name,a.value);});n.text=s.text;s.parentNode.insertBefore(n,s.nextSibling);});
    if(window.gtag)gtag('consent','update',{analytics_storage:c.analytics?'granted':'denied',ad_storage:c.ads?'granted':'denied',ad_user_data:c.ads?'granted':'denied',ad_personalization:c.ads?'granted':'denied'});
  }
  function go(){
    var p=document.getElementById('kxConsent');if(!p)return;
    var boxes=p.querySelectorAll('input[data-cat]'),saved=read();
    function open(){var c=read()||{};boxes.forEach(function(b){b.checked=!!c[b.dataset.cat];});p.hidden=false;var f=p.querySelector('button');if(f)f.focus({preventScroll:true});}
    function close(){p.hidden=true;}
    function save(c){c.t=Date.now();try{localStorage.setItem(KEY,JSON.stringify(c));}catch(e){}run(c);close();}
    p.addEventListener('click',function(e){var a=e.target.closest('[data-cc]');if(!a)return;var k=a.dataset.cc,c={};
      if(k==='close'){close();return;}
      boxes.forEach(function(b){c[b.dataset.cat]=k==='accept'?true:k==='reject'?false:b.checked;});save(c);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!p.hidden&&!p.dataset.auto)close();});
    document.querySelectorAll('.kx-cookie-open').forEach(function(b){b.addEventListener('click',open);});
    if(saved)run(saved);else if(p.dataset.auto)open();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
