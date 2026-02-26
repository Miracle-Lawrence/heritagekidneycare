// Toggle expandable sections in mobile menu
document.querySelectorAll(".expandable .toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const submenu = toggle.parentElement.nextElementSibling;
    submenu.classList.toggle("open");
    toggle.textContent = submenu.classList.contains("open") ? "−" : "+";
  });
});

// Open mobile menu
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.add("open");
});

// Close mobile menu
document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.remove("open");
});
