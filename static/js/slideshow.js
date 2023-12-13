function scrollSlideShow(slideNumber, slideshow, direction, title, slideWidth) {
  const slides = slideshow.children;
  const last = slides.length - 1;

  if (slideNumber < last && direction === "next") {
    const newSlideNumber = slideNumber + 1;
    const scroll = `translate(-${newSlideNumber * slideWidth}vw, 0)`;
    slideshow.style.transform = scroll;
    updateSlideName(newSlideNumber, slides, title);
    return newSlideNumber;
  }

  if (slideNumber >= last && direction === "next") {
    const newSlideNumber = 0;
    slideshow.style.transform = `translate(0, 0)`;
    updateSlideName(newSlideNumber, slides, title);
    return newSlideNumber;
  }

  if (slideNumber > 0 && direction === "prev") {
    const newSlideNumber = slideNumber - 1;
    const scroll = `translate(-${newSlideNumber * slideWidth}vw, 0)`;
    slideshow.style.transform = scroll;
    updateSlideName(newSlideNumber, slides, title);
    return newSlideNumber;
  }

  return 0;
}

function updateSlideName(slideNumber, slides, title) {
  const slideNameArray = slides[slideNumber].src.split("/");
  const slideName = slideNameArray[slideNameArray.length - 1];
  title.innerText = slideName;
}

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 750) {
    return true;
  }
  return false;
}

const containers = Array.from(
  document.getElementsByClassName("slideshow-container")
);

containers.forEach((container) => {
  const slideshow = container.querySelector(".slideshow");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");
  const title = container.querySelector(".picture-title");
  const slideWidth = checkScreenWidth() ? 100 : 40;

  let current = 0;
  const intervalId = setInterval(() => {
    current = scrollSlideShow(current, slideshow, "next", title, slideWidth);
  }, 10000);

  prevBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    current = scrollSlideShow(current, slideshow, "prev", title, slideWidth);
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    current = scrollSlideShow(current, slideshow, "next", title, slideWidth);
  });
});
