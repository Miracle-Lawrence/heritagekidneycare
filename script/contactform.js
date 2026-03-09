contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  const errorMessages = contactForm.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => msg.remove());

  let isValid = true;

  const firstName = contactForm.first_name.value.trim();
  const lastName = contactForm.last_name.value.trim();
  const email = contactForm.email.value.trim();
  const phone = contactForm.phone.value.trim();
  const location = contactForm.location.value.trim();
  const subject = contactForm.subject.value.trim();
  const message = contactForm.message.value.trim();

  const showError = (field, message) => {
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "#d93025";
    error.style.fontSize = "13px";
    error.style.marginTop = "4px";
    error.innerText = message;
    field.parentElement.appendChild(error);
  };

  // Validation checks
  if (!firstName) {
    isValid = false;
    showError(contactForm.first_name, "First name is required.");
  }
  if (!lastName) {
    isValid = false;
    showError(contactForm.last_name, "Last name is required.");
  }
  if (!email) {
    isValid = false;
    showError(contactForm.email, "Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    isValid = false;
    showError(contactForm.email, "Enter a valid email address.");
  }
  if (!phone) {
    isValid = false;
    showError(contactForm.phone, "Phone number is required.");
  } else if (!/^0\d{9,10}$/.test(phone)) {
    isValid = false;
    showError(contactForm.phone, "Enter a valid Nigerian phone number.");
  }
  if (!location) {
    isValid = false;
    showError(contactForm.location, "Please select a hospital location.");
  }

  if (!isValid) return;

  // Show premium toast
  showToast(`Thank you, ${firstName}! Your message has been submitted.`);

  // Prepare WhatsApp message
  const hospitalWhatsApp = "2349167760222";
  const whatsappMessage = encodeURIComponent(
    `New Consultation Request from Heritage Kidney & Medical Care Website:\n\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Location: ${location}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message}`,
  );

  // Open WhatsApp chat in new tab
  window.open(
    `https://wa.me/${hospitalWhatsApp}?text=${whatsappMessage}`,
    "_blank",
  );

  contactForm.reset();
});
