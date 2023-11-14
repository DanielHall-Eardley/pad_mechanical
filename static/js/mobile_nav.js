const menu = `
<nav class="header-nav-container">
  <a href="/" class="header-nav">HOME</a>
  <a href="/about" class="header-nav">ABOUT US</a>
  <a href="/products" class="header-nav">POLISHING PRODUCTS</a>
  <a href="/how-to" class="header-nav">HOW TO GUIDE</a>
  <a href="/pictures" class="header-nav">PICTURES</a>
  <a href="/contact" class="header-nav">CONTACT</a>
</nav>
`;

const closedMobileMenu = `
    <button class="open-menu-btn">
      <svg class="menu-icon">
        <use xlink:href="symbol-defs.svg#icon-menu"></use>
      </svg>
    </button>
`;

const openMobileMenu = `
  <nav class="header-nav-container">
    <a href="/" class="header-nav">HOME</a>
    <a href="/about" class="header-nav">ABOUT US</a>
    <a href="/products" class="header-nav">POLISHING PRODUCTS</a>
    <a href="/how-to" class="header-nav">HOW TO GUIDE</a>
    <a href="/pictures" class="header-nav">PICTURES</a>
    <a href="/contact" class="header-nav">CONTACT</a>
    <button class="close-menu-btn">
      <svg class="cross-icon">
        <use xlink:href="symbol-defs.svg#icon-cross"></use>
      </svg>
    </button>
  </nav>
`;

function checkForMobile() {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  if (screenWidth < 650) {
    setMenu(closedMobileMenu);
  } else {
    setMenu(menu);
  }
}

function setMenu(menu) {
  const nav = document.querySelector(".header-nav-container");
  nav.innerHTML = menu;
  menuListeners();
}

function menuListeners() {
  const menuBtn = document.querySelector(".open-menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", (event) => {
      setMenu(openMobileMenu);
      const closeMenuBtn = document.querySelector(".close-menu-btn");
      closeMenuBtn.addEventListener("click", (event) => {
        setMenu(closedMobileMenu);
      });
    });
  }
}

checkForMobile();
