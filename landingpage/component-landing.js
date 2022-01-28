const hamburgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileAside = document.querySelector(".mobile-aside");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  mobileAside.classList.toggle("active");
});
