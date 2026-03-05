// scripts/services.js
export function renderServices(services) {
  const container = document.getElementById("services-container");

  const dialog = document.getElementById("service-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogDescription = document.getElementById("dialog-description");
  const closeDialog = document.getElementById("close-dialog");

  services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";

    const shortDescription = service.description.substring(0, 100) + "...";

    card.innerHTML = `
      <img src="${service.image}" alt="${service.name}" class="service-image">
      <h3 class="service-title">${service.name}</h3>
      <p class="service-description">${shortDescription}</p>
      <button class="service-button">${service.button}</button>
    `;

    const button = card.querySelector(".service-button");

    button.addEventListener("click", () => {
      dialogTitle.textContent = service.name;
      dialogDescription.textContent = service.description;
      dialog.showModal();
    });

    container.appendChild(card);
  });

  closeDialog.addEventListener("click", () => {
    dialog.close();
  });
}
