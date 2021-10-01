// Loading page

setTimeout(() => {
  document.getElementById("page").style.display = "block";
  document.getElementById("loading").style.display = "none";
}, 6000)

// Burger menu

const burgerMenu = document.querySelector(".e-burger-menu");
const navMenu = document.querySelector(".c-navigation__list");
const navLink = document.querySelectorAll(".e-link");

function mobileMenu() {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}

burgerMenu.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));