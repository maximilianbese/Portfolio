"use strict";

/* ═══════════════════════════════════════════════
   MOBILE NAVIGATION — Hamburger Menu & Drawer
════════════════════════════════════════════════ */
(function () {
  var hamburger = document.getElementById("hamburgerBtn");
  var mobileNav = document.getElementById("mobileNav");
  var backdrop = document.getElementById("mobileNavBackdrop");

  if (!hamburger || !mobileNav || !backdrop) return;

  function openNav() {
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", function () {
    var isOpen = mobileNav.classList.contains("open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  backdrop.addEventListener("click", closeNav);

  /* Close drawer when a nav link is tapped */
  mobileNav.querySelectorAll("a[href]").forEach(function (link) {
    link.addEventListener("click", function () {
      /* Small delay so scroll anchor fires first */
      setTimeout(closeNav, 80);
    });
  });

  /* Escape key support */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNav.classList.contains("open")) {
      closeNav();
      hamburger.focus();
    }
  });

  /* Sync language buttons between mobile and desktop navs */
  var allLangBtns = document.querySelectorAll(".lang-btn");

  allLangBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var selectedLang = this.textContent.trim().toLowerCase();
      allLangBtns.forEach(function (b) {
        var isActive = b.textContent.trim().toLowerCase() === selectedLang;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    });
  });
})();

/* ═══════════════════════════════════════════════
   NAVBAR — Scroll-aware background
════════════════════════════════════════════════ */
(function () {
  var navbar = document.querySelector(".navbar");
  if (!navbar) return;

  var THRESHOLD = 60;

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > THRESHOLD);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); /* Run on page load in case user refreshes mid-page */
})();

/* ═══════════════════════════════════════════════
   NAVBAR — Fixed position handled via CSS (base.css)
════════════════════════════════════════════════ */
