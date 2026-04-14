const projectItems = document.querySelectorAll(".project-item");
const previewImage = document.getElementById("project-image");

// Mapping der IDs zu den Bildpfaden
const projectImages = {
  join: "./assets/img/join-preview.png",
  loco: "./assets/img/elpollo-preview.png",
  bubble: "",
};

projectItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // 1. Aktive Klasse bei allen entfernen, beim aktuellen hinzufügen
    projectItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // 2. Bild wechseln mit einem kleinen Fade-Effekt
    const projectKey = item.getAttribute("data-project");
    previewImage.style.opacity = 0;

    setTimeout(() => {
      previewImage.src = projectImages[projectKey];
      previewImage.style.opacity = 1;
    }, 150);
  });
});
