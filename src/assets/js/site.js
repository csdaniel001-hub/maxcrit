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


/* side menu hover: a pointing hand slides in and its fingertip lines up with the middle of the label */
(function(){
  var TIP=7.6/67; // fingertip sits 11% down the hand image
  function textBox(a){var r=document.createRange(),L=1e9,R=-1e9,T=1e9,B=-1e9,w=document.createTreeWalker(a,NodeFilter.SHOW_TEXT),n;
    while((n=w.nextNode())){if(!n.nodeValue.trim())continue;r.selectNodeContents(n);[].forEach.call(r.getClientRects(),function(q){L=Math.min(L,q.left);R=Math.max(R,q.right);T=Math.min(T,q.top);B=Math.max(B,q.bottom);});}
    return R>L?{left:L,right:R,mid:(T+B)/2}:null;}
  function place(a){var h=a.querySelector(':scope > .kx-pt'),t=textBox(a);if(!h||!t)return;var box=a.getBoundingClientRect(),hw=h.offsetWidth,hh=h.offsetHeight;
    var x=Math.min(t.right-box.left+16,box.width-hw+12);h.style.left=x+'px';h.style.right='auto';h.style.top=(t.mid-box.top-hh*TIP)+'px';h.style.marginTop='0';}
  function go(){document.querySelectorAll('.gz-side nav > a,.gz-side .sub').forEach(function(a){if(a.querySelector(':scope > .kx-pt'))return;var f=document.createElement('i');f.className='kx-pt';f.setAttribute('aria-hidden','true');a.appendChild(f);
    a.addEventListener('mouseenter',function(){place(a);});a.addEventListener('focus',function(){place(a);});});fit();}
  // labels too long to leave room for the hand wrap onto two lines instead of being covered
  function fit(){document.querySelectorAll('.gz-side nav > a,.gz-side .sub').forEach(function(a){a.classList.remove('kx-tight');var t=textBox(a);if(!t)return;var box=a.getBoundingClientRect();if(box.width&&box.right-t.right<38)a.classList.add('kx-tight');});}
  window.addEventListener('resize',function(){clearTimeout(fit.t);fit.t=setTimeout(fit,150);});
  window.addEventListener('load',fit);if(document.fonts&&document.fonts.addEventListener)document.fonts.addEventListener('loadingdone',fit);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();

/* Cookie consent: asks only when site.consent lists an optional service. Gated scripts are written as
   <script type="text/plain" data-consent="analytics|ads" ...> and start only after consent. */
(function(){
  var KEY='mc-consent',DAYS=365;
  function read(){try{var v=JSON.parse(localStorage.getItem(KEY)||'null');if(v&&Date.now()-v.t<DAYS*864e5)return v;}catch(e){}return null;}
  function run(c){
    document.querySelectorAll('script[type="text/plain"][data-consent]').forEach(function(s){
      if(!c[s.dataset.consent]||s.dataset.done)return;s.dataset.done='1';var n=document.createElement('script');
      [].slice.call(s.attributes).forEach(function(a){if(a.name!=='type'&&a.name!=='data-consent')n.setAttribute(a.name,a.value);});n.text=s.text;s.parentNode.insertBefore(n,s.nextSibling);});
    if(!c.analytics){document.cookie.split(';').forEach(function(k){var n=k.split('=')[0].trim();if(/^_ga/.test(n)){var h=location.hostname.split('.');for(var i=0;i<h.length;i++){var d=h.slice(i).join('.');document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.'+d;}document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';}});}
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
    // Global Privacy Control: treat as a refusal, don't ask
    if(!saved&&navigator.globalPrivacyControl===true){var g={};boxes.forEach(function(b){g[b.dataset.cat]=false;});g.gpc=true;save(g);return;}
    if(saved)run(saved);else if(p.dataset.auto)open();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();

/* article header: reading progress, share and copy-link buttons */
(function(){
  function go(){
    var h=document.querySelector('.axh');if(!h)return;
    var bar=h.querySelector('.axh-prog'),body=document.querySelector('.ar .gz-abody');
    if(bar&&body){var tick=false;function upd(){tick=false;var r=body.getBoundingClientRect(),vh=innerHeight,tot=r.height-vh*.6,p=tot>0?Math.min(1,Math.max(0,(vh*.4-r.top)/tot)):0;bar.style.setProperty('--p',p.toFixed(3));}
      addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});addEventListener('resize',upd);upd();}
    function flash(b){b.classList.add('ok');setTimeout(function(){b.classList.remove('ok');},1400);}
    function legacy(u){var t=document.createElement('textarea');t.value=u;t.setAttribute('readonly','');t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}t.remove();return ok;}
    function copy(b){var u=location.href.split('#')[0],lab=b.querySelector('span'),txt=lab&&lab.textContent;function done(m){if(lab){lab.textContent=m;setTimeout(function(){lab.textContent=txt;},1600);}flash(b);}
      if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(u).then(function(){done('Copied!');},function(){done(legacy(u)?'Copied!':'Copy failed');});}else done(legacy(u)?'Copied!':'Copy failed');}
    var sh=h.querySelector('.axh-share'),cp=h.querySelector('.axh-copy');
    if(sh)sh.addEventListener('click',function(){if(navigator.share){navigator.share({title:document.title,url:location.href.split('#')[0]}).catch(function(){});}else copy(sh);});
    if(cp)cp.addEventListener('click',function(){copy(cp);});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
/* Latest news sidebar and header ticker, filled from latest.json so pages stay static between news batches (2026-11-26) */
(function(){
  function esc(x){return String(x).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function href(pre,u){return pre+esc(u).replace(/\.html$/,'');}
  function go(){
    var s=document.querySelector('.ar-latest[data-latest]'),t=document.querySelector('.gz-marq[data-tick]');
    if((!s&&!t)||!window.fetch)return;
    fetch((s||t).getAttribute(s?'data-latest':'data-tick'),{cache:'no-cache'}).then(function(r){return r.ok?r.json():{};}).then(function(j){
      if(s&&j.latest){var pre=s.getAttribute('data-pre')||'',self=(s.getAttribute('data-self')||'').replace(/\.html$/,''),h='',k=0;
        j.latest.forEach(function(n){if(k>=5||('/'+n.u).replace(/\.html$/,'')===self)return;k++;
          h+='<a class="cc-nr" href="'+href(pre,n.u)+'"><span class="cc-nt"><img src="'+pre+esc(n.i)+'" alt="" width="480" height="270" loading="lazy" decoding="async"></span><span class="cc-nx"><b>'+esc(n.t)+'</b><time datetime="'+esc(n.d)+'">'+esc(n.s)+'</time></span></a>';});
        if(h)s.querySelector('.ar-latest-list').innerHTML=h;}
      if(t&&j.ticker&&j.ticker.length){var tp=t.getAttribute('data-pre')||'',spans=t.querySelectorAll('.gz-marq-in > span');
        for(var r=0;r<spans.length;r++){var h2='';j.ticker.forEach(function(n){h2+='<a href="'+href(tp,n.u)+'"'+(r?' tabindex="-1"':'')+'><b>'+esc(n.m)+'</b>'+esc(n.t)+'</a>';});spans[r].innerHTML=h2;}}
    }).catch(function(){});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
