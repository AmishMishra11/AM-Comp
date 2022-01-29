var successBtn = document.querySelector(".success-button");
var successAlert = document.querySelector(".success-alert");
var closeSuccess = document.querySelector(".close-success-alert");

var errorBtn = document.querySelector(".error-button");
var errorAlert = document.querySelector(".error-alert");
var closeError = document.querySelector(".close-error-alert");

var warningBtn = document.querySelector(".warning-button");
var warningAlert = document.querySelector(".warning-alert");
var closeWarning = document.querySelector(".close-warning-alert");

successBtn.addEventListener("click", () => {
  successAlert.style.display = "flex";
  setTimeout(() => successAlert.classList.add("active"), 400);
});

closeSuccess.addEventListener("click", () => {
  setTimeout(() => (successAlert.style.display = "none"), 400);

  successAlert.classList.remove("active");
});

errorBtn.addEventListener("click", () => {
  errorAlert.style.display = "flex";
  setTimeout(() => errorAlert.classList.add("active"), 400);
});

closeError.addEventListener("click", () => {
  setTimeout(() => (errorAlert.style.display = "none"), 400);
  errorAlert.classList.remove("active");
});

warningBtn.addEventListener("click", () => {
  warningAlert.style.display = "flex";
  setTimeout(() => warningAlert.classList.add("active"), 400);
});

closeWarning.addEventListener("click", () => {
  setTimeout(() => (warningAlert.style.display = "none"), 400);
  warningAlert.classList.remove("active");
});
