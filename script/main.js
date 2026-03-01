import { renderTestimonials } from "./render.js";
import { initSlider } from "./slider.js";
import { initNewsletterValidation } from "./validation.js";

const track = document.querySelector(".reviews-track");

async function loadData() {
  try {
    const response = await fetch("json/testimonials.json");

    if (!response.ok) {
      throw new Error("Failed to load JSON");
    }

    const testimonials = await response.json();

    renderTestimonials(track, testimonials);
    initSlider(track, testimonials);
  } catch (error) {
    console.error(error);
  }
}

loadData();
initNewsletterValidation();


