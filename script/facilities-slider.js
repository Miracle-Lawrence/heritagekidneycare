const sliders = document.querySelectorAll(".image-slider");

sliders.forEach((slider) => {
  const images = slider.dataset.images.split(",");
  let index = 0;

  setInterval(() => {
    slider.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % images.length;
      slider.src = images[index];

      slider.style.opacity = 1;
    }, 400);
  }, 5000);
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const arrow = question.querySelector(".arrow");

    // Close all others
    document.querySelectorAll(".faq-answer").forEach((item) => {
      if (item !== answer) {
        item.style.display = "none";
      }
    });

    document.querySelectorAll(".arrow").forEach((arr) => {
      if (arr !== arrow) {
        arr.textContent = "▼";
      }
    });

    // Toggle current
    if (answer.style.display === "block") {
      answer.style.display = "none";
      arrow.textContent = "▼";
    } else {
      answer.style.display = "block";
      arrow.textContent = "▲";
    }
  });
});

// Hide all answers initially
document.querySelectorAll(".faq-answer").forEach((item) => {
  item.style.display = "none";
});