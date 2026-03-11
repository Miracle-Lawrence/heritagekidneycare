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
