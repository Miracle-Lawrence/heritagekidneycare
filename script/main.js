import { renderTestimonials } from "./render.js";
import { initSlider } from "./slider.js";
import { initNewsletterValidation } from "./validation.js";
import { renderServices } from "./services.js";
import { renderArticles } from "./articles.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".reviews-track");

  // Load Testimonials
  async function loadTestimonials() {
    try {
      const response = await fetch("json/testimonials.json");

      if (!response.ok) {
        throw new Error("Failed to load testimonials");
      }

      const testimonials = await response.json();

      renderTestimonials(track, testimonials);
      initSlider(track, testimonials);
    } catch (error) {
      console.error(error);
    }
  }

  // Load Services
  async function loadServices() {
    try {
      const response = await fetch("json/services.json");

      if (!response.ok) {
        throw new Error("Failed to load services");
      }

      const services = await response.json();

      renderServices(services);
    } catch (error) {
      console.error("Error loading services:", error);
    }
  }

  // Load Articles
  async function loadArticles() {
    try {
      const response = await fetch("json/articles.json");

      if (!response.ok) {
        throw new Error("Failed to load articles");
      }

      const data = await response.json();

      renderArticles(data.articles);
    } catch (error) {
      console.error("Error loading articles:", error);
    }
  }

  loadTestimonials();
  loadServices();
  loadArticles();

  initNewsletterValidation();
});
