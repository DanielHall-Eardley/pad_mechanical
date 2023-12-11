function scrollSlideShow(slideNumber, slideshow, direction, title) {
  const slides = slideshow.children;
  const last = slides.length - 1;

  if (slideNumber < last && direction === "next") {
    const newSlideNumber = slideNumber + 1;
    const scrollLength = `translate(-${newSlideNumber * 40}vw, 0)`;
    slideshow.style.transform = scrollLength;
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
    const scrollLength = `translate(-${newSlideNumber * 40}vw, 0)`;
    slideshow.style.transform = scrollLength;
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

const containers = Array.from(
  document.getElementsByClassName("slideshow-container")
);

containers.forEach((container) => {
  const slideshow = container.querySelector(".slideshow");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");
  const title = container.querySelector(".picture-title");
  let current = 0;
  const intervalId = setInterval(() => {
    current = scrollSlideShow(current, slideshow, "next", title);
  }, 10000);

  prevBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    current = scrollSlideShow(current, slideshow, "prev", title);
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    current = scrollSlideShow(current, slideshow, "next", title);
  });
});
