// ===============================
// EMAILJS INITIALIZATION
// ===============================
const YOUR_PUBLIC_KEY = "omgmA_K_NzcfiRxRn";
const YOUR_SERVICE_ID = "service_dxxw78s";
const template_simple = "template_usdbt6g";
const template_detailed = "template_7gd7rra";
    
    
(function () {
  emailjs.init(YOUR_PUBLIC_KEY); // <-- replace
})();

// ===============================
// HELPER FUNCTION (optional)
// ===============================
function handleSuccess(form, message = "Success!") {
  alert(message);
  form.reset();
}

function handleError(error) {
  console.error("EmailJS Error:", error);
  alert("Something went wrong. Please try again.");
}

// ===============================
// 1. CONTACT FORM
// ===============================
const contactForm = document.querySelector(".form-grid");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .send(YOUR_SERVICE_ID, template_simple, {
        form_type: "Contact Form",
        name: contactForm.first_name.value + " " + contactForm.last_name.value,
        email: contactForm.email.value,
        phone: contactForm.phone.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value,
      })
      .then(() => handleSuccess(contactForm, "Message sent!"))
      .catch(handleError);
  });
}

// ===============================
// 2. NEWSLETTER FORM
// ===============================
const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .send(YOUR_SERVICE_ID, template_simple, {
        form_type: "Newsletter Subscription",
        name: newsletterForm[0].value,
        email: newsletterForm[1].value,
        phone: "N/A",
        subject: "Newsletter Signup",
        message: "User subscribed to newsletter",
      })
      .then(() => handleSuccess(newsletterForm, "Subscribed successfully!"))
      .catch(handleError);
  });
}

// ===============================
// 3. PATIENT REGISTRATION
// ===============================
const patientForm = document.getElementById("heritagePatientForm");

if (patientForm) {
  patientForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
Surname: ${surname.value}
First Name: ${firstname.value}
Other Name: ${othername.value}
Sex: ${sex.value}
DOB: ${dob.value}
Age: ${age.value}
Marital Status: ${maritalstatus.value}

Phone: ${phone.value}
Email: ${email.value}

Home Address: ${homeaddress.value}
Office Address: ${officeaddress.value}

Next of Kin:
Name: ${nokname.value}
Relationship: ${nokrelationship.value}
Phone: ${nokphone.value}
Address: ${nokaddress.value}
`;

    emailjs
      .send(YOUR_SERVICE_ID, template_detailed, {
        form_type: "Patient Registration",
        message: message,
      })
      .then(() => handleSuccess(patientForm, "Registration successful!"))
      .catch(handleError);
  });
}

// ===============================
// 4. APPOINTMENT FORM
// ===============================
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
Name: ${firstName.value} ${lastName.value}
Phone: ${phone.value}

Date: ${date.value}
Time: ${time.value}
`;

    emailjs
      .send(YOUR_SERVICE_ID, template_detailed, {
        form_type: "Appointment Booking",
        message: message,
      })
      .then(() => handleSuccess(appointmentForm, "Appointment booked!"))
      .catch(handleError);
  });
}

// ===============================
// 5. JOB APPLICATION FORM
// ===============================
const jobForm = document.getElementById("heritageForm");

if (jobForm) {
  jobForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
Name: ${firstName.value} ${lastName.value}
Gender: ${gender.value}

Email: ${email.value}
Phone: ${phone.value}
Address: ${address.value}

Status: ${status.value}
Position: ${position.value}
Experience: ${experience.value}

Heard About: ${hearAbout.value}
`;

    emailjs
      .send(YOUR_SERVICE_ID, template_detailed, {
        form_type: "Job Application",
        message: message,
      })
      .then(() => handleSuccess(jobForm, "Application submitted!"))
      .catch(handleError);
  });
}
