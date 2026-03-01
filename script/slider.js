export function initSlider(track, testimonials) {
  let currentIndex = 0;
  let interval;

  function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function slide() {
    const cardsPerView = getCardsPerView();
    const cardWidth = track.children[0].offsetWidth + 30;

    currentIndex++;

    if (currentIndex > testimonials.length - cardsPerView) {
      currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function start() {
    interval = setInterval(slide, 5000);
  }

  function reset() {
    currentIndex = 0;
    track.style.transform = "translateX(0)";
  }

  window.addEventListener("resize", reset);

  start();
}
