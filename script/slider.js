export function initSlider(track, testimonials) {
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let currentIndex = 0;

  function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function getCardWidth() {
    return track.children[0].offsetWidth + 30;
  }

  function setPosition() {
    track.style.transform = `translateX(${currentTranslate}px)`;
  }

  function snapToSlide() {
    const cardWidth = getCardWidth();
    const cardsPerView = getCardsPerView();

    currentIndex = Math.round(Math.abs(currentTranslate) / cardWidth);

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > testimonials.length - cardsPerView) {
      currentIndex = testimonials.length - cardsPerView;
    }

    currentTranslate = -currentIndex * cardWidth;
    prevTranslate = currentTranslate;

    track.style.transition = "transform 0.3s ease";
    setPosition();
  }

  // START DRAG
  function startDrag(e) {
    isDragging = true;
    startX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    track.style.transition = "none";
  }

  // MOVE
  function drag(e) {
    if (!isDragging) return;

    const currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;

    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;

    setPosition();
  }

  // END DRAG
  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    snapToSlide();
  }

  // EVENTS
  track.addEventListener("mousedown", startDrag);
  track.addEventListener("mousemove", drag);
  track.addEventListener("mouseup", endDrag);
  track.addEventListener("mouseleave", endDrag);

  track.addEventListener("touchstart", startDrag);
  track.addEventListener("touchmove", drag);
  track.addEventListener("touchend", endDrag);

  // RESET ON RESIZE
  window.addEventListener("resize", () => {
    currentIndex = 0;
    currentTranslate = 0;
    prevTranslate = 0;
    setPosition();
  });
}
