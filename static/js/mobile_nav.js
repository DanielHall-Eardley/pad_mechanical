const menu = `
  <a href="/" class="header-nav">HOME</a>
  <a href="/airstream" class="header-nav">AIRSTREAM</a>
  <a href="/pictures" class="header-nav">AIRPLANE</a>
  <a href="/products" class="header-nav">TRUCK</a>
  <a href="/products" class="header-nav">MISC</a>
  <a href="/products" class="header-nav">PRODUCTS</a>
  <a href="/how-to" class="header-nav">HOW TO GUIDE</a>
  <a href="/contact" class="header-nav">CONTACT</a>
`;

const closedMobileMenu = `
    <button class="open-menu-btn">
      <svg class="menu-icon">
        <use xlink:href="symbol-defs.svg#icon-menu"></use>
      </svg>
    </button>
`;

const openMobileMenu = `
    ${menu}
    <button class="close-menu-btn">
      <svg class="cross-icon">
        <use xlink:href="symbol-defs.svg#icon-cross"></use>
      </svg>
    </button>
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
