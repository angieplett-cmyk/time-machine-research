(function () {
  'use strict';
  var TT = window.TT;
  var stage = document.getElementById('stage');
  var panel = document.getElementById('panel');
  var dest = document.getElementById('dest');
  var warp = document.getElementById('warp');
  var canvas = document.getElementById('stars');
  var countEl = document.getElementById('count');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var busy = false, timers = [], raf = 0;

  function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }

  /* Build the control panel buttons */
  TT.groups.forEach(function (g) {
    var b = TT.el('button', 'tbtn' + (g.id === 'start' ? ' start' : ''), null, { type: 'button', 'data-group': g.id });
    b.style.setProperty('--c', g.color);
    b.appendChild(TT.icon(g.glyph));
    var inner = g.id === 'start' ? TT.el('span', 't-wrap') : b;
    inner.appendChild(TT.el('span', 't-en', g.en));
    inner.appendChild(TT.el('span', 't-es', g.es, { lang: 'es' }));
    var dt = TT.el('span', 't-dt');
    dt.appendChild(TT.el('span', 'dt-en', g.dates_en));
    dt.appendChild(TT.el('span', 'dt-es', g.dates_es, { lang: 'es' }));
    inner.appendChild(dt);
    if (inner !== b) b.appendChild(inner);
    b.setAttribute('aria-label', g.en + ' / ' + g.es + '. ' + g.dates_en);
    b.addEventListener('click', function () { travel(g.id); });
    panel.appendChild(b);
  });

  /* Doors */
  function openDoors() {
    if (stage.classList.contains('open')) return;
    stage.classList.add('open');
    later(function () { var f = panel.querySelector('button'); if (f) f.focus({ preventScroll: true }); }, reduce ? 50 : 1950);
  }
  function closeDoors() {
    stage.classList.remove('open');
    var o = document.getElementById('btnOpen'); if (o) o.focus({ preventScroll: true });
  }
  document.getElementById('doors').addEventListener('click', openDoors);
  document.getElementById('btnOpen').addEventListener('click', function (e) { e.stopPropagation(); openDoors(); });
  document.getElementById('btnCloseDoors').addEventListener('click', closeDoors);

  /* Warp starfield: constant brightness, smooth motion only (no flashing) */
  function startStars() {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = canvas.width = Math.floor(canvas.clientWidth * dpr);
    var H = canvas.height = Math.floor(canvas.clientHeight * dpr);
    var cx = W / 2, cy = H / 2, stars = [], N = 160, t0 = performance.now();
    for (var i = 0; i < N; i++) stars.push({ a: Math.random() * 6.283, r: Math.random() * 0.15 + 0.02, s: Math.random() * 0.6 + 0.4 });
    var maxR = Math.sqrt(cx * cx + cy * cy);
    function frame(now) {
      var el = (now - t0) / 1000, speed = 0.4 + el * el * 0.55;
      ctx.fillStyle = '#02030f'; ctx.fillRect(0, 0, W, H);
      ctx.lineCap = 'round';
      for (var i = 0; i < N; i++) {
        var s = stars[i], prev = s.r;
        s.r += (0.004 + s.r * 0.035) * speed * s.s;
        if (s.r > 1.1) { s.r = Math.random() * 0.05 + 0.01; s.a = Math.random() * 6.283; prev = s.r; }
        var x1 = cx + Math.cos(s.a) * prev * maxR, y1 = cy + Math.sin(s.a) * prev * maxR;
        var x2 = cx + Math.cos(s.a) * s.r * maxR, y2 = cy + Math.sin(s.a) * s.r * maxR;
        ctx.strokeStyle = 'rgba(190,235,255,' + Math.min(0.9, 0.25 + s.r) + ')';
        ctx.lineWidth = (1 + s.r * 3) * dpr;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
  }
  function stopStars() { cancelAnimationFrame(raf); raf = 0; }

  function showDest(gid) {
    var g = TT.groupsById[gid];
    dest.style.setProperty('--gc', g.color);
    var h = document.getElementById('destTitle'); h.textContent = '';
    h.appendChild(TT.el('span', 'en', g.en)); h.appendChild(TT.el('span', 'es', g.es, { lang: 'es' }));
    var d = document.getElementById('destDates'); d.textContent = '';
    d.appendChild(TT.el('span', 'en', g.dates_en)); d.appendChild(TT.el('span', 'es', g.dates_es, { lang: 'es' }));
    TT.renderTiles(document.getElementById('tiles'), gid);
    dest.hidden = false;
    dest.scrollTop = 0;
    void dest.offsetWidth;
    dest.classList.add('show');
    stage.classList.add('dest-open');
    stage.classList.remove('warping');
    document.getElementById('btnBackPanel').focus({ preventScroll: true });
  }
  function finishWarp(gid) {
    showDest(gid);
    warp.classList.add('fade');
    later(function () { warp.hidden = true; warp.classList.remove('fade'); stopStars(); busy = false; }, reduce ? 20 : 650);
  }
  function travel(gid) {
    if (busy) return;
    busy = true;
    var g = TT.groupsById[gid];
    document.getElementById('goEn').textContent = 'Traveling to: ' + g.en;
    document.getElementById('goEs').textContent = 'Viajando a: ' + g.es;
    warp.classList.remove('fade');
    warp.hidden = false;
    stage.classList.add('warping');
    if (reduce) {
      countEl.textContent = '…';
      later(function () { finishWarp(gid); }, 900);
      return;
    }
    startStars();
    var n = 3;
    function tick() {
      countEl.textContent = String(n);
      countEl.classList.remove('pop'); void countEl.offsetWidth; countEl.classList.add('pop');
      if (n > 1) { n--; later(tick, 1000); } else { later(function () { finishWarp(gid); }, 1000); }
    }
    tick();
  }
  function backToPanel() {
    if (busy) return;
    dest.classList.remove('show');
    dest.hidden = true;
    stage.classList.remove('dest-open');
    var b = panel.querySelector('button'); if (b) b.focus({ preventScroll: true });
  }
  document.getElementById('btnBackPanel').addEventListener('click', backToPanel);
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!dest.hidden) backToPanel(); else if (stage.classList.contains('open') && !busy) closeDoors();
  });
  window.__tt = { travel: travel, openDoors: openDoors };
})();
