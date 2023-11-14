function setCurrentNav() {
  if (!checkScreenWidth()) {
    const pageName = window.location.pathname;
    console.log({ pageName });
    const linkEl = document.querySelector(`a[href="${pageName}"]`);
    linkEl.className = "header-nav current-page";
  }
}

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 650) {
    return true;
  }
  return false;
}

setCurrentNav();
