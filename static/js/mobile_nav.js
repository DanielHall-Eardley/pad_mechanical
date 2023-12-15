const menu = `
  <a href="/" class="header-nav">Home</a>
  <a href="/aircraft" class="header-nav">Aircraft</a>
  <a href="/airstream" class="header-nav">Airstream</a>
  <a href="/truck" class="header-nav">Trucks</a>
  <a href="/misc" class="header-nav">Misc Pics</a>
  <a href="/products" class="header-nav">Purchase Products</a>
  <a href="/contact" class="header-nav">Contacts</a>
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
