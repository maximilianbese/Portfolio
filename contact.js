document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const statusEl = document.getElementById("formStatus");
    const btn = document.getElementById("submitBtn");

    // Daten sammeln
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    // UI Feedback: Button deaktivieren
    btn.disabled = true;
    btn.innerText = "Sending...";
    statusEl.innerText = "";

    try {
      const response = await fetch("contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        statusEl.innerText = "Thanks! Your message has been sent.";
        statusEl.style.color = "var(--accent-green)";
        form.reset();
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      statusEl.innerText = "Error: " + error.message;
      statusEl.style.color = "#ff4d4d";
    } finally {
      btn.disabled = false;
      btn.innerText = "Say Hello :)";
    }
  });
