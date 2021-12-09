// Under Construction Alert
function stillWorking() {
  alert('Still working on that.');
}
function play() {
  var audio = document.getElementById('audio');
  audio.play();
}
// Preloader
const preloader = document.getElementById('preloader');
window.addEventListener('load', function () {
  preloader.style.display = 'none';
});
