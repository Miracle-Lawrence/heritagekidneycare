export async function renderDoctors() {
  const doctorsGrid = document.getElementById("doctorsGrid");

  try {
    const response = await fetch("./json/doctors.json");
    const doctors = await response.json();

    doctorsGrid.innerHTML = doctors
      .map(
        (doctor) => `
          <div class="doctor-card">
            <img src="${doctor.image}" alt="${doctor.name}" class="doctor-img">

            <div class="doctor-info">
              <h3>${doctor.name}</h3>
              <p class="doctor-specialty">${doctor.specialty}</p>
              <p class="doctor-description">${doctor.description}</p>
            </div>
          </div>
        `,
      )
      .join("");
  } catch (error) {
    console.error("Error loading doctors:", error);
  }
}
