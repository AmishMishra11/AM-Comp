var dismissBtn = document.querySelector(".dismiss");
var dismissCard = document.querySelector(".dismiss-card");

function disappear() {
  console.log("here");
  dismissCard.style.display = "none";
}

dismissBtn.addEventListener("click", disappear);
