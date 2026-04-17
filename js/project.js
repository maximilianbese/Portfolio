"use strict";

/** @type {Record<string, {number:string, title:string, descKey:string, img:string, tech:string[], github:string, live:string}>} */
const PROJECT_DATA = {
  join: {
    number: "01",
    title: "Join",
    descKey: "desc_join",
    img: "./assets/img/join-preview.png",
    tech: ["angular", "typescript", "html", "css", "firebase"],
    github:
      "https://github.com/Jan-OliverKaemmererDev/Join/commits?author=maximilianbese",
    live: "https://join.maximilian-bese.de/",
  },
  loco: {
    number: "02",
    title: "El Pollo Loco",
    descKey: "desc_loco",
    img: "./assets/img/elpollo-preview.png",
    tech: ["html", "css", "javascript"],
    github: "https://github.com/maximilianbese/El-Pollo-Loco.git",
    live: "https://el-pollo-loco.maximilian-bese.de/",
  },
  bubble: {
    number: "03",
    title: "DA Bubble",
    descKey: "desc_bubble",
    img: "./assets/img/in-progress.png",
    tech: ["angular", "typescript", "firebase"],
    github: "https://github.com/maximilianbese/da-bubble",
    live: "#",
  },
};

/** @param {string} techName @returns {HTMLElement} */
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

/** @param {string} id */
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

/** @param {string} id */
function openProject(id) {
  window.currentProjectId = id;
  populateOverlay(id);
  document.getElementById("project-overlay").classList.remove("d-none");
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  document.getElementById("project-overlay").classList.add("d-none");
  document.body.style.overflow = "";
  window.currentProjectId = null;
}

function nextProject() {
  const keys = Object.keys(PROJECT_DATA);
  const next = (keys.indexOf(window.currentProjectId) + 1) % keys.length;
  openProject(keys[next]);
}

function initProjectHover() {
  const previewImg = document.getElementById("project-image");
  document.querySelectorAll(".project-item").forEach((item) => {
    const key = item.getAttribute("data-project");
    item.addEventListener("mouseenter", () => {
      document
        .querySelectorAll(".project-item")
        .forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      previewImg.style.opacity = 0;
      setTimeout(() => {
        previewImg.src = PROJECT_DATA[key].img;
        previewImg.style.opacity = 1;
      }, 150);
    });
    item.addEventListener("click", () => openProject(key));
  });
}

function initOverlayClose() {
  document.getElementById("project-overlay").addEventListener("click", (e) => {
    if (e.target.id === "project-overlay") closeOverlay();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initProjectHover();
  initOverlayClose();
});
