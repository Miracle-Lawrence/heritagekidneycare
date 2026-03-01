import { renderTestimonials } from "./render.js";
import { initSlider } from "./slider.js";
import { initNewsletterValidation } from "./validation.js";

const track = document.querySelector(".reviews-track");

async function loadData() {
  const response = await fetch("../json/testimonials.json");
  const testimonials = await response.json();

  renderTestimonials(track, testimonials);
  initSlider(track, testimonials);
}

loadData();
initNewsletterValidation();


