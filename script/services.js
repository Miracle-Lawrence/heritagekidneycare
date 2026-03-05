export async function loadServices() {
  const container = document.getElementById("servicesContainer");

  if (!container) return;

  try {
    const response = await fetch("./json/services.json");
    const services = await response.json();

    services.forEach((service) => {
      const card = document.createElement("div");
      card.classList.add("service-card");

      card.innerHTML = `
        <div class="service-image">
          <img src="${service.image}" alt="${service.name}" loading="lazy">
        </div>

        <div class="service-content">
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <button class="service-btn">${service.button}</button>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading services:", error);
  }
}
