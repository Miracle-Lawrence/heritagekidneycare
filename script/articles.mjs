// scripts/articles.js

export function renderArticles(articles) {
  const container = document.getElementById("articles-container");

  container.innerHTML = "";

  articles.forEach((article) => {
    const card = document.createElement("article");
    card.className = "article-card";

    card.innerHTML = `
      <div class="article-image">
        <img src="${article.image}" alt="${article.title}">
      </div>

      <div class="article-content">
        <span class="article-category">${article.category}</span>

        <h3 class="article-title">${article.title}</h3>

        <p class="article-date">${new Date(article.date).toDateString()}</p>

        <p class="article-text">
          ${article.content}
        </p>

        <a href="#" class="read-more">
          ${article.readMore} →
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}
