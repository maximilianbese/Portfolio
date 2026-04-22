/**
 * @file mobile-nav.js
 * @description Mobile navigation overlay controller.
 *
 * Handles opening and closing the hamburger/slide-in navigation menu used on
 * viewports ≤ 850 px. The menu can be dismissed by:
 *  - Clicking the hamburger button (toggle).
 *  - Clicking the dark overlay backdrop behind the panel.
 *  - Clicking any mobile nav link (closes after navigation).
 *  - Pressing the Escape key.
 *  - Resizing the viewport above 850 px.
 *
 * Accessibility: sets `aria-expanded` on the hamburger button to reflect
 * the current menu state for assistive technologies.
 *
 * Dependencies: None (standalone IIFE). Requires the following IDs in the DOM:
 *  - `hamburger-btn` — the toggle button element.
 *  - `mobile-menu`   — the overlay container element.
 *
 * @module mobile-nav
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 1.0.0
 */

"use strict";

(function () {
  const btn = document.getElementById("hamburger-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!btn || !menu) return;

  /**
   * Opens the mobile navigation overlay.
   * Adds `.is-open` to the button and menu, locks body scroll, and updates
   * the `aria-expanded` attribute on the button.
   *
   * @returns {void}
   */
  const open = () => {
    btn.classList.add("is-open");
    menu.classList.add("is-open");
    document.body.style.overflow = "hidden";
    btn.setAttribute("aria-expanded", "true");
  };

  /**
   * Closes the mobile navigation overlay.
   * Removes `.is-open` from the button and menu, restores body scroll, and
   * updates the `aria-expanded` attribute on the button.
   *
   * @returns {void}
   */
  const close = () => {
    btn.classList.remove("is-open");
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
    btn.setAttribute("aria-expanded", "false");
  };

  /** Toggle on hamburger click. */
  btn.addEventListener("click", () =>
    menu.classList.contains("is-open") ? close() : open(),
  );

  /** Close when the backdrop (not the panel) is clicked. */
  menu.addEventListener("click", (e) => {
    if (e.target === menu) close();
  });

  /** Close when a navigation link is clicked (the page will scroll/navigate). */
  links.forEach((l) => l.addEventListener("click", close));

  /** Close on Escape key. */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  /**
   * Close when the viewport grows beyond the mobile breakpoint so the menu
   * does not remain open when switching to desktop layout.
   */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) close();
  });
})();
