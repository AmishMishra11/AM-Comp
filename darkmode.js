const darkBtn = document.querySelector(".dark-mode");
const bodyContent = document.querySelector(".header");

function clickHander() {
  const modeClick = localStorage.getItem("colorMode");
  if (modeClick == "dark") {
    localStorage.setItem("colorMode", "light");
    bodyContent.classList.remove("dark");
  } else if (modeClick == "light") {
    localStorage.setItem("colorMode", "dark");
    bodyContent.classList.add("dark");
  } else {
    localStorage.setItem("colorMode", "light");
  }
}

darkBtn.addEventListener("click", clickHander);

(() => {
  const mode = localStorage.getItem("colorMode");
  console.log(mode);
  if (mode == "dark") {
    bodyContent.classList.add("dark");
  } else {
    bodyContent.classList.remove("dark");
  }
})();
