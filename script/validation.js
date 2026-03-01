// ===============================
// NEWSLETTER FORM VALIDATION
// ===============================

export function initNewsletterValidation() {
  const form = document.querySelector("#newsletter-form");

  if (!form) return;

  const nameInput = form.querySelector("input[type='text']");
  const emailInput = form.querySelector("input[type='email']");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    // Simple Validation
    if (nameInput.value.trim().length < 2) {
      showError(nameInput);
      valid = false;
    } else {
      removeError(nameInput);
    }

    if (!validateEmail(emailInput.value)) {
      showError(emailInput);
      valid = false;
    } else {
      removeError(emailInput);
    }

    if (valid) {
      showSuccess(form);
      form.reset();
    }
  });

  // Live Validation
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length >= 2) removeError(nameInput);
  });

  emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value)) removeError(emailInput);
  });
}

// Email Regex
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Error Animation
function showError(input) {
  input.classList.add("input-error");
  input.classList.add("shake");

  setTimeout(() => input.classList.remove("shake"), 500);
}

function removeError(input) {
  input.classList.remove("input-error");
}

// Success Animation
function showSuccess(form) {
  form.classList.add("form-success");

  setTimeout(() => {
    form.classList.remove("form-success");
  }, 1500);
}
