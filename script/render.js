export function renderTestimonials(track, testimonials) {
  track.innerHTML = "";

  testimonials.forEach((t) => {
    const card = document.createElement("div");
    card.classList.add("review-card");

    card.innerHTML = `
      <div class="review-header">
        <span class="google-logo">G</span>
        <span class="stars">${"★".repeat(t.rating)}</span>
      </div>
      <p class="review-text">${t.review}</p>
      <div class="review-footer">
        <strong>${t.name}</strong>
        <span>${t.location}</span>
      </div>
    `;

    track.appendChild(card);
  });
}
