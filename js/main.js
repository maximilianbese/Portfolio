/**
 * @file main.js
 * @description Core page initialisation — scroll-to-top and section fade-in on scroll.
 *
 * All other features (marquee, ticker, contact form, language switching) live
 * in their own dedicated modules and are loaded separately via `<script>` tags.
 *
 * Dependencies: None (standalone module).
 *
 * @module main
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 2.0.0
 */

"use strict";

/* ================================================
   SCROLL-TO-TOP — Footer Logo
   ================================================ */

/**
 * Wires up the footer logo link so that clicking it smoothly scrolls
 * the page back to the very top.
 *
 * @listens DOMContentLoaded
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function () {
  var logoLink = document.querySelector(".footer-logo-link");
  if (!logoLink) return;

  logoLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ================================================
   SECTION FADE-IN ON SCROLL
   ================================================ */

/**
 * Observes sections and card elements entering the viewport and applies a
 * fade-in + upward-slide transition via the `is-visible` class.
 *
 * Elements are unobserved after they become visible so the observer does
 * not fire again on subsequent scrolls.
 *
 * The required CSS is injected at runtime so this module stays self-contained
 * and does not require a separate stylesheet entry.
 *
 * @listens DOMContentLoaded
 * @returns {void}
 */
(function () {
  /** CSS injected at runtime for the fade-in transition. */
  var style = document.createElement("style");
  style.textContent = [
    ".fade-in-section {",
    "  opacity: 0;",
    "  transform: translateY(30px);",
    "  transition: opacity 0.7s ease, transform 0.7s ease;",
    "}",
    ".fade-in-section.is-visible {",
    "  opacity: 1;",
    "  transform: translateY(0);",
    "}",
  ].join("\n");
  document.head.appendChild(style);

  document.addEventListener("DOMContentLoaded", function () {
    /** Selector covering all animatable page regions. */
    var SELECTOR =
      "section, .skills-card, .project-card, .about-card, .testimonial-card";

    var sections = document.querySelectorAll(SELECTOR);

    sections.forEach(function (el) {
      el.classList.add("fade-in-section");
    });

    /**
     * IntersectionObserver callback — adds `is-visible` once an element
     * crosses the threshold and immediately unobserves it.
     *
     * @param {IntersectionObserverEntry[]} entries
     * @returns {void}
     */
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach(function (el) {
      observer.observe(el);
    });
  });
})();
