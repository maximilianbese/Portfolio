"use strict";

/* ═══════════════════════════════════════════════
   TESTIMONIALS SLIDER
   Desktop (> 900px): 3-card panorama with center/side layout
   Mobile  (≤ 900px): Single-card carousel, one card visible at a time
════════════════════════════════════════════════ */
(function () {
  var track = document.getElementById("testimonialsTrack");
  if (!track) return;

  var cards = Array.from(track.querySelectorAll(".testimonial-card"));
  var dots = Array.from(document.querySelectorAll(".t-dot"));
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var current = 0;
  var total = cards.length;

  /* ── Is the viewport in mobile mode? ── */
  function isMobile() {
    return window.innerWidth <= 900;
  }

  /* ── Card width for the current breakpoint ── */
  function getCardWidth() {
    var vw = window.innerWidth;
    /* Must match CSS: width: calc(100vw - Xpx) */
    if (vw <= 320) return vw - 20;
    if (vw <= 375) return vw - 28;
    if (vw <= 600) return vw - 32;
    return Math.min(vw - 48, 480); /* ≤ 900px */
  }

  /* ── Desktop panorama widths ── */
  function getDesktopWidths() {
    var vw = window.innerWidth;
    if (vw <= 1024) return { center: 480, side: 260, overlap: 40 };
    return { center: 620, side: 320, overlap: 40 };
  }

  /* ── Update classes and transition ── */
  function updateSlider() {
    if (isMobile()) {
      updateMobile();
    } else {
      updateDesktop();
    }
    updateDots();
  }

  function updateMobile() {
    var cardW = getCardWidth();

    /* All cards same width; only center is opaque */
    cards.forEach(function (card, i) {
      card.classList.remove("t-center", "t-side");
      card.classList.add(i === current ? "t-center" : "t-side");
    });

    /* Shift so the active card sits centered in the viewport */
    var vw = window.innerWidth;
    var shift = vw / 2 - cardW / 2 - current * cardW;
    track.style.transform = "translateX(" + shift + "px)";
  }

  function updateDesktop() {
    var w = getDesktopWidths();

    cards.forEach(function (card, i) {
      card.classList.remove("t-center", "t-side");
      card.classList.add(i === current ? "t-center" : "t-side");
    });

    var vw = window.innerWidth;
    var totalBefore = current * (w.side - w.overlap);
    var shift = vw / 2 - w.center / 2 - totalBefore;
    track.style.transform = "translateX(" + shift + "px)";
  }

  function updateDots() {
    dots.forEach(function (d, i) {
      d.classList.toggle("active", i === current);
    });
  }

  function goTo(idx) {
    current = (idx + total) % total;
    updateSlider();
  }

  /* ── Controls ── */
  if (prevBtn)
    prevBtn.addEventListener("click", function () {
      goTo(current - 1);
    });
  if (nextBtn)
    nextBtn.addEventListener("click", function () {
      goTo(current + 1);
    });

  dots.forEach(function (d) {
    d.addEventListener("click", function () {
      goTo(parseInt(d.dataset.i, 10));
    });
  });

  /* ── Touch / swipe ── */
  var touchStartX = 0;

  track.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].clientX;
    },
    { passive: true },
  );

  track.addEventListener(
    "touchend",
    function (e) {
      var delta = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(delta) >= 40) {
        goTo(delta > 0 ? current + 1 : current - 1);
      }
    },
    { passive: true },
  );

  /* ── Debounced resize ── */
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateSlider, 80);
  });

  /* ── Init ── */
  updateSlider();
})();
