// diagnostics.js

async function fetchDiagnostics() {
  const res = await fetch("/json/diagnostics.json");
  const data = await res.json();
  return data.health_check_plans;
}

function renderDiagnostics(plans, container) {
  container.innerHTML = "";

  plans.forEach((plan) => {
    const card = document.createElement("div");
    card.className = "plan-card";

    card.innerHTML = `
      <div class="plan-card-header">
        <h3>${plan.category}</h3>
      </div>

      <div class="plan-card-body">
        <ul>
          ${plan.tests.map((test) => `<li>${test}</li>`).join("")}
        </ul>
      </div>

      <div class="plan-card-footer">
        <a href="appointment.html#book-appointment"><button class="btn">Book Now</button></a>
      </div>
    `;

    container.appendChild(card);
  });
}

export async function initDiagnostics(selector) {
  const container = document.querySelector(selector);
  const plans = await fetchDiagnostics();
  renderDiagnostics(plans, container);
}
