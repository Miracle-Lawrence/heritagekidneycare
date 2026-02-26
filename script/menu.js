document.addEventListener("DOMContentLoaded", function () {
  // Toggle expandable sections
  document.querySelectorAll(".expandable .toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parent = this.closest(".expandable");
      const submenu = parent.querySelector(".submenu");

      submenu.classList.toggle("open");

      this.textContent = submenu.classList.contains("open") ? "−" : "+";
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
});
