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

document.addEventListener("DOMContentLoaded", function () {
  const panels = document.querySelectorAll(".panel");

  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY) {
            // Scrolling DOWN → from LEFT
            entry.target.style.transform = "translateX(-80px)";
            requestAnimationFrame(() => {
              entry.target.classList.add("show-from-left");
            });
          } else {
            // Scrolling UP → from RIGHT
            entry.target.style.transform = "translateX(80px)";
            requestAnimationFrame(() => {
              entry.target.classList.add("show-from-right");
            });
          }

          lastScrollY = currentScrollY;
        }
      });
    },
    { threshold: 0.3 },
  );

  panels.forEach((panel) => observer.observe(panel));
});

// Optional: Add fade-in animation for services
const services = document.querySelectorAll('.service');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

services.forEach(service => {
  service.style.opacity = 0;
  service.style.transform = 'translateY(20px)';
  observer.observe(service);
});
