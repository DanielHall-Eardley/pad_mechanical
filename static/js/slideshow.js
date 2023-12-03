function scrollSlideShow(currentSlide, slideshow) {
  const scrollLength = currentSlide * 40;
  slideshow.style.transform = `translate(-${scrollLength}vw, 0)`;
}

const slideshows = Array.from(document.getElementsByClassName("slideshow"));
console.log(slideshows);
slideshows.forEach((slideshow) => {
  const slides = slideshow.children;
  const last = slides.length - 1;
  let current = 0;

  const intervalId = setInterval(() => {
    if (current < last) {
      current += 1;
    } else {
      current = 0;
    }

    scrollSlideShow(current, slideshow);
  }, 10000);
});
