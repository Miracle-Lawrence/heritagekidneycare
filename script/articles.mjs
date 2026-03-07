// scripts/articles.mjs

export function renderArticles(articles) {
  const container = document.getElementById("articles-container");

  if (!container) return;

  container.innerHTML = "";

  articles.forEach((article) => {
    const card = document.createElement("div");
    card.className = "article-card";

    card.innerHTML = `
      <div class="article-content">
        <span class="article-category">${article.category}</span>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-summary">${article.summary}</p>

        <div class="article-meta">
          <span class="article-author">By ${article.author}</span>
          <span class="article-date">${new Date(article.date).toDateString()}</span>
        </div>

        ${
          article.featured ? `<span class="featured-badge">Featured</span>` : ""
        }
      </div>
    `;

    container.appendChild(card);
  });
}
