const darkBtn = document.querySelector(".dark-mode");
const bodyContent = document.querySelector(".header");

function clickHander() {
  console.log("here");
  bodyContent.classList.toggle("dark");
}
darkBtn.addEventListener("click", clickHander);
