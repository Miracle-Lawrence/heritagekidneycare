/* ========================================
   APPOINTMENT FORM SCRIPT
   Handles:
   - Step transitions
   - Nigerian phone formatting
   - WhatsApp submission
   - Email submission
======================================== */

document.addEventListener("DOMContentLoaded", function () {
  const stageContainer = document.querySelector(".form-stage-container");
  const progressSteps = document.querySelectorAll(".progress-step");
  const phoneInput = document.getElementById("phone");
  const form = document.getElementById("appointmentForm");

  /* =========================
     STEP TRANSITIONS
  ========================= */

  window.goToNextLayer = function () {
    stageContainer.style.transform = "translateX(-50%)";

    progressSteps[0].classList.remove("active");
    progressSteps[1].classList.add("active");
  };

  window.goBackLayer = function () {
    stageContainer.style.transform = "translateX(0)";

    progressSteps[1].classList.remove("active");
    progressSteps[0].classList.add("active");
  };

  /* =========================
     NIGERIAN PHONE FORMAT
  ========================= */

  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      let numbers = this.value.replace(/\D/g, "");

      if (numbers.length > 4 && numbers.length <= 7) {
        numbers = numbers.replace(/(\d{4})(\d+)/, "$1 $2");
      }

      if (numbers.length > 7) {
        numbers = numbers.replace(/(\d{4})(\d{3})(\d+)/, "$1 $2 $3");
      }

      this.value = numbers;
    });
  }

  /* =========================
     FORM SUBMISSION
  ========================= */

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const first = document.getElementById("firstName").value.trim();
      const last = document.getElementById("lastName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      const message = `Appointment Request

Name: ${first} ${last}
Phone: ${phone}

Preferred Date: ${date}
Preferred Time: ${time}`;

      /* =========================
         SEND TO WHATSAPP
      ========================= */

      const whatsappNumber = "2349167760222";

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank");

      /* =========================
         SEND EMAIL
      ========================= */

      const email =
        `mailto:heritagekmc@gmail.com` +
        `?subject=Appointment Request` +
        `&body=${encodeURIComponent(message)}`;

      window.location.href = email;

      /* =========================
         SUCCESS MESSAGE
      ========================= */

      alert(
        "Your appointment request has been prepared. Please complete it in WhatsApp or Email.",
      );

      form.reset();

      goBackLayer();
    });
  }
});
