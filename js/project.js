/**
 * @file project.js
 * @description Project list interactions: hover preview and detail overlay.
 *
 * Responsibilities:
 *  - Maintains a typed project data registry (`PROJECT_DATA`).
 *  - Shows a preview image on hover over each project list item.
 *  - Opens a full-screen detail overlay when a project item is clicked.
 *  - Populates the overlay with localised content from the shared `TRANSLATIONS`
 *    object (defined in `language.js`).
 *  - Supports navigating to the next project without closing the overlay.
 *  - Closes the overlay on backdrop click, close button click, or Escape key.
 *
 * Globals read:
 *  - `TRANSLATIONS` (from `language.js`) — for localised project descriptions.
 *
 * Globals written:
 *  - `window.currentProjectId` — tracks the currently open project key so
 *    that `language.js` can refresh the description on language change.
 *
 * @module project
 * @author Maximilian Bese <maximilian-bese@gmx.de>
 * @version 1.0.0
 */

"use strict";

/**
 * Registry of all portfolio projects.
 * Each entry is keyed by a short slug used as the `data-project` attribute
 * value on the corresponding `.project-item` element.
 *
 * @type {Record<string, {
 *   number: string,
 *   title: string,
 *   descKey: string,
 *   img: string,
 *   tech: string[],
 *   github: string,
 *   live: string
 * }>}
 */
const PROJECT_DATA = {
  join: {
    number: "01",
    title: "Join",
    descKey: "desc_join",
    img: "./assets/img/join-preview.png",
    tech: ["angular", "typescript", "html", "css", "firebase"],
    github: "https://github.com/maximilianbese/Join.git",
    live: "https://join.maximilian-bese.de/",
  },
  pokedex: {
    number: "02",
    title: "Pokedex",
    descKey: "desc_pokedex",
    img: "./assets/img/pokedex-preview.png",
    tech: ["html", "css", "javascript", "pokeapi"],
    github: "https://github.com/maximilianbese/Pokedex.git",
    live: "https://pokedex.maximilian-bese.de/",
  },
  loco: {
    number: "03",
    title: "El Pollo Loco",
    descKey: "desc_loco",
    img: "./assets/img/elpollo-preview.png",
    tech: ["html", "css", "javascript"],
    github: "https://github.com/maximilianbese/El-Pollo-Loco.git",
    live: "https://el-pollo-loco.maximilian-bese.de/",
  },
};

/**
 * Builds a technology chip element consisting of an icon image and a label.
 * If the icon SVG file is not found (`onerror`), the image is hidden gracefully.
 *
 * @param {string} techName - Lowercase technology slug (e.g. `"angular"`, `"css"`).
 * @returns {HTMLDivElement} The assembled chip wrapper element.
 */
function buildTechChip(techName) {
  const wrapper = document.createElement("div");
  wrapper.className = "tech-icon-wrapper";

  const img = document.createElement("img");
  img.src = `./assets/icons/green-${techName}-logo.svg`;
  img.alt = techName;
  img.className = "overlay-tech-icon";
  img.onerror = () => (img.style.display = "none");

  const label = document.createElement("span");
  label.innerText = techName.charAt(0).toUpperCase() + techName.slice(1);

  wrapper.append(img, label);
  return wrapper;
}

/**
 * Populates all overlay DOM elements with data for the given project.
 * Uses the current localStorage language to pick the correct description.
 *
 * @param {string} id - Project slug key from {@link PROJECT_DATA}.
 * @returns {void}
 */
function populateOverlay(id) {
  const p = PROJECT_DATA[id];
  const lang = localStorage.getItem("preferredLang") || "en";

  document.getElementById("overlay-number").innerText = p.number;
  document.getElementById("overlay-title").innerText = p.title;
  document.getElementById("overlay-description").innerText =
    (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang][p.descKey]) ||
    "";
  document.getElementById("overlay-img-src").src = p.img;
  document.getElementById("overlay-github").href = p.github;
  document.getElementById("overlay-live").href = p.live;

  const techEl = document.getElementById("overlay-tech");
  techEl.innerHTML = "";
  p.tech.forEach((t) => techEl.appendChild(buildTechChip(t)));
}

/**
 * Opens the project detail overlay for the given project slug.
 * Locks body scroll and stores the active project id on `window` so that
 * the language module can refresh the description on language change.
 *
 * @param {string} id - Project slug key from {@link PROJECT_DATA}.
 * @returns {void}
 */
function openProject(id) {
  window.currentProjectId = id;
  populateOverlay(id);
  document.getElementById("project-overlay").classList.remove("d-none");
  document.body.style.overflow = "hidden";
}

/**
 * Closes the project detail overlay and restores body scroll.
 *
 * @returns {void}
 */
function closeOverlay() {
  document.getElementById("project-overlay").classList.add("d-none");
  document.body.style.overflow = "";
  window.currentProjectId = null;
}

/**
 * Advances the overlay to the next project in `PROJECT_DATA`, wrapping
 * around to the first project after the last.
 *
 * @returns {void}
 */
function nextProject() {
  const keys = Object.keys(PROJECT_DATA);
  const next = (keys.indexOf(window.currentProjectId) + 1) % keys.length;
  openProject(keys[next]);
}

/**
 * Attaches hover and click handlers to all `.project-item` elements.
 *
 * On `mouseenter`: activates the hovered item and swaps the preview image.
 * On `mouseleave`: deactivates the item and fades out the preview.
 * On `click`:      opens the detail overlay for the project.
 *
 * @returns {void}
 */
function initProjectHover() {
  const previewContainer = document.querySelector(".preview-container");
  const previewImg = document.getElementById("project-image");
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => {
    const key = item.getAttribute("data-project");

    item.addEventListener("mouseenter", () => {
      projectItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      previewImg.src = PROJECT_DATA[key].img;
      previewContainer.style.opacity = "1";
      previewContainer.style.transform = "translateY(0)";
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
      previewContainer.style.opacity = "0";
      previewContainer.style.transform = "translateY(10px)";
    });

    item.addEventListener("click", () => openProject(key));
  });
}

/**
 * Registers overlay close handlers:
 *  - Backdrop click (target === overlay element itself).
 *  - Escape key.
 *
 * @returns {void}
 */
function initOverlayClose() {
  document.getElementById("project-overlay").addEventListener("click", (e) => {
    if (e.target.id === "project-overlay") closeOverlay();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });
}

/**
 * Entry point — initialises hover previews and overlay close behaviour
 * once the DOM is fully parsed.
 *
 * @listens DOMContentLoaded
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", () => {
  initProjectHover();
  initOverlayClose();
});
