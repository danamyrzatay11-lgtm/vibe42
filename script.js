document.addEventListener("DOMContentLoaded", () => {

  // Fade-in on scroll
  const targets = document.querySelectorAll(".section, .card, .module");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );
  targets.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Nav border on scroll
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    nav.style.borderBottomColor = window.scrollY > 10
      ? "rgba(255,255,255,0.1)"
      : "rgba(255,255,255,0.07)";
  });

  // WhatsApp form
  const form = document.getElementById("applyForm");
  const successBox = document.getElementById("successBox");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name    = form.querySelector('[name="name"]').value.trim();
      const phone   = form.querySelector('[name="phone"]').value.trim();
      const email   = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      const text = [
        "Здравствуйте! Оставляю заявку на Vibe42 🚀",
        "",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Email: ${email}`,
        message ? `Комментарий: ${message}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const waUrl = `https://wa.me/77054192399?text=${encodeURIComponent(text)}`;

      // Открываем WhatsApp
      window.open(waUrl, "_blank");

      // Показываем успех, скрываем форму
      form.style.display = "none";
      successBox.style.display = "block";
    });
  }
});
