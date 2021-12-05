function stillWorking() {
  alert("Still working on that.");
}
// Preloader
var preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});
