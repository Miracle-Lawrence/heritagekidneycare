document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".commitment");
  const bgImage = document.querySelector(".commitment-bg img");

  if (!section || !bgImage) return;

  /* =========================
     FADE IN EFFECT
  ========================== */

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(section);

  /* =========================
     SMOOTH AUTO MOVEMENT + PARALLAX
  ========================== */

  let offset = 0;

  function animateBackground() {
    offset += 0.3; // 🔥 auto slow movement speed

    const scrollPosition = window.scrollY;
    const parallaxMove = scrollPosition * -0.2;

    bgImage.style.transform = `translateY(${parallaxMove}px) 
       translateX(${Math.sin(offset * 0.01) * 10}px)
       scale(1.15)`;

    requestAnimationFrame(animateBackground);
  }

  animateBackground();
});
