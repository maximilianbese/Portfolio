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

  function toggleNav() {
    mobileNav.classList.contains("open") ? closeNav() : openNav();
  }

  hamburger.addEventListener("click", toggleNav);
  backdrop.addEventListener("click", closeNav);

  mobileNav.querySelectorAll("a[href]").forEach(function (link) {
    link.addEventListener("click", function () {
      setTimeout(closeNav, 80);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNav.classList.contains("open")) {
      closeNav();
      hamburger.focus();
    }
  });

  /* Sync lang buttons between mobile and desktop */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = this.textContent.trim().toLowerCase();
      document.querySelectorAll(".lang-btn").forEach(function (b) {
        var active = b.textContent.trim().toLowerCase() === lang;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
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

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
