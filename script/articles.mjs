// scripts/articles.mjs

let currentIndex = 0;
let currentArticles = [];

// Render all articles
export function renderArticles(articles) {
  currentArticles = articles;

  const container = document.getElementById("articles-container");
  container.innerHTML = "";

  articles.forEach((article, index) => {
    const card = document.createElement("article");
    card.className = "article-card";

    const shortText = article.content.substring(0, 100) + "...";

    card.innerHTML = `
      <div class="article-image">
        <img src="${article.image}" alt="${article.title}">
      </div>

      <div class="article-content">
        <span class="article-category">${article.category}</span>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-date">${new Date(article.date).toDateString()}</p>
        <p class="article-text">${shortText}</p>

        <a href="#" class="read-more" data-index="${index}">
          ${article.readMore} →
        </a>
      </div>
    `;

    container.appendChild(card);
  });

  // Add click event to all read-more links
  document.querySelectorAll(".read-more").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = Number(e.target.dataset.index);
      openModal();
    });
  });
}

// Open modal with current article
function openModal() {
  const modal = document.getElementById("article-modal");
  const article = currentArticles[currentIndex];

  document.getElementById("modal-title").textContent = article.title;
  document.getElementById("modal-date").textContent = new Date(
    article.date,
  ).toDateString();

  document.getElementById("modal-body").innerHTML = article.fullContent;

  const modalImage = document.getElementById("modal-image");
  modalImage.src = article.image;
  modalImage.alt = article.title;

  modal.classList.add("show");
}

// Close modal
function closeModal() {
  document.getElementById("article-modal").classList.remove("show");
}

// Go to next article
function nextArticle() {
  currentIndex = (currentIndex + 1) % currentArticles.length;
  openModal();
}

// Go to previous article
function prevArticle() {
  currentIndex =
    (currentIndex - 1 + currentArticles.length) % currentArticles.length;
  openModal();
}

// Event delegation for modal controls
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("article-modal");
  const modalContent = document.querySelector(".modal-content");

  // Close button (works even if element loaded later)
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
      closeModal();
    }
  });

  // Click outside modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC key closes modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Mobile swipe gestures
  let touchStartY = 0;
  let touchStartX = 0;

  modalContent.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  });

  modalContent.addEventListener("touchend", (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;

    // Swipe down → close
    if (touchEndY - touchStartY > 100) closeModal();

    // Swipe left → next
    if (touchStartX - touchEndX > 50) nextArticle();

    // Swipe right → previous
    if (touchEndX - touchStartX > 50) prevArticle();
  });

  // Next / Previous buttons
  document.getElementById("next-btn").addEventListener("click", nextArticle);
  document.getElementById("prev-btn").addEventListener("click", prevArticle);
});
