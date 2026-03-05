// scripts/services.js
export function renderServices(services) {
  const container = document.getElementById("services-container");

  services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";

    card.innerHTML = `
      <img src="${service.image}" alt="${service.name}" class="service-image">
      <h3 class="service-title">${service.name}</h3>
      <p class="service-description">${service.description}</p>
      <button class="service-button">${service.button}</button>
    `;

    container.appendChild(card);
  });
}
