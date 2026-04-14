document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".arrow.prev");
  const nextBtn = document.querySelector(".arrow.next");

  let currentIndex = 1; // Startet bei der zweiten Karte

  function updateSlider() {
    cards.forEach((card, index) => {
      // Zuerst alle Klassen entfernen
      card.classList.remove("active", "prev", "next");

      // Logik für Endlos-Schleife (Modulo)
      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add("prev");
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add("next");
      }
    });

    // Dots aktualisieren
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Event Listener für Pfeile (mit Endlos-Logik)
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider();
    });
  }

  // Klick direkt auf eine Karte
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Initialisierung beim Laden der Seite
  updateSlider();
});
