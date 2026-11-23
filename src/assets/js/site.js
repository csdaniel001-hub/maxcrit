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

  // UTC clock in the header
  var st = document.getElementById('sysTime');
  if (st) {
    var fmt;
    try { fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); } catch (e) {}
    var tick = function () { st.textContent = fmt ? fmt.format(new Date()) : new Date().toTimeString().slice(0, 8); };
    tick(); setInterval(tick, 1000);
  }

  // Theme toggle
  var tb = document.getElementById('themeBtn');
  function syncTheme() {
    var dark = document.documentElement.getAttribute('data-gz') === 'dark';
    if (tb) tb.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (tb) {
    syncTheme();
    tb.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.getAttribute('data-gz') === 'dark' ? 'light' : 'dark';
      function apply() {
        root.setAttribute('data-gz', next);
        try { localStorage.setItem('gz-theme2', next); } catch (e) {}
        syncTheme();
      }
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (document.startViewTransition && !reduce) {
        var r = tb.getBoundingClientRect();
        root.style.setProperty('--vx', (r.left + r.width / 2) + 'px');
        root.style.setProperty('--vy', (r.top + r.height / 2) + 'px');
        root.classList.add('vt-theme');
        var t = document.startViewTransition(apply);
        t.finished.then(function () { root.classList.remove('vt-theme'); }, function () { root.classList.remove('vt-theme'); });
      } else { apply(); }
    });
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
  var side = b.closest('.side');
  b.addEventListener('click', function () {
    var open = side.classList.toggle('open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
})();

// Load more on the homepage list
(function () {
  var b = document.getElementById('loadMore'); if (!b) return;
  b.addEventListener('click', function () {
    var hidden = [].slice.call(document.querySelectorAll('#moreList > a.more-item[hidden]'));
    hidden.slice(0, Number(b.dataset.step) || 10).forEach(function (el) { el.hidden = false; });
    if (hidden.length <= (Number(b.dataset.step) || 10)) b.remove();
  });
})();
