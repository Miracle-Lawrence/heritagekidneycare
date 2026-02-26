document.addEventListener("DOMContentLoaded", function () {
  /* =====================================================
     ACTIVE NAV LINK (CURRENT PAGE UNDERLINE)
  ====================================================== */

  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("current");
    }
  });

  /* =====================================================
     OPTIONAL SMOOTH SCROLL
  ====================================================== */

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* =====================================================
     GLOBAL PAGES (SEARCH DATA)
  ====================================================== */

  const sitePages = [
    { name: "Home", url: "index.html" },
    { name: "About Us", url: "about.html" },
    { name: "Facilities", url: "facilities.html" },
    { name: "Routine Processes", url: "routine.html" },
    { name: "Milestones", url: "milestones.html" },
    { name: "Patient Registration", url: "registration.html" },
    { name: "Insurance", url: "insurance.html" },
    { name: "Team", url: "team.html" },
    { name: "Research", url: "research.html" },
    { name: "Testimonials", url: "testimonial.html" },
    { name: "Surgery", url: "surgery.html" },
    { name: "Diagnostics", url: "diagnostics.html" },
    { name: "Dialysis", url: "dialysis.html" },
    { name: "Technology", url: "technology.html" },
  ];

  /* =====================================================
     MOBILE MENU
  ====================================================== */

  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".menu-overlay");
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");

  if (menu && hamburger) {
    hamburger.addEventListener("click", function () {
      menu.classList.add("open");
      overlay?.classList.add("active");
    });

    function closeMenu() {
      menu.classList.remove("open");
      overlay?.classList.remove("active");
    }

    closeBtn?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);

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
  }

  /* =====================================================
     DESKTOP SEARCH
  ====================================================== */

  const desktopSearch = document.querySelector(".desktop-search");
  const desktopIcon = document.querySelector(".desktop-search .search-icon");
  const desktopBox = document.querySelector(".desktop-search .search-box");
  const desktopInput = document.querySelector(".desktop-search .search-input");
  const desktopResults = document.querySelector(
    ".desktop-search .search-results",
  );

  if (
    desktopSearch &&
    desktopIcon &&
    desktopBox &&
    desktopInput &&
    desktopResults
  ) {
    desktopIcon.addEventListener("click", function (e) {
      e.stopPropagation();
      desktopBox.classList.toggle("active");
      desktopInput.focus();
    });

    desktopInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      desktopResults.innerHTML = "";

      if (!query) return;

      const filtered = sitePages.filter((page) =>
        page.name.toLowerCase().includes(query),
      );

      filtered.forEach((page) => {
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.name;
        desktopResults.appendChild(link);
      });
    });

    desktopInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const query = this.value.toLowerCase();
        const match = sitePages.find((page) =>
          page.name.toLowerCase().includes(query),
        );
        if (match) {
          window.location.href = match.url;
        }
      }
    });

    document.addEventListener("click", function (e) {
      if (!desktopSearch.contains(e.target)) {
        desktopBox.classList.remove("active");
      }
    });
  }

  /* =========================
   HERO IMAGE SLIDER
========================= */

const slides = document.querySelectorAll(".hero-bg");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 5000);
  /* =====================================================
     MOBILE SEARCH
  ====================================================== */

  const mobileInput = document.querySelector(".mobile-search-input");
  const mobileResults = document.querySelector(".mobile-search-results");

  if (mobileInput && mobileResults) {
    mobileInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      mobileResults.innerHTML = "";

      if (!query) return;

      const filtered = sitePages.filter((page) =>
        page.name.toLowerCase().includes(query),
      );

      filtered.forEach((page) => {
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.name;
        mobileResults.appendChild(link);
      });
    });
  }
});
