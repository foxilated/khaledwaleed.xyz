// Under Construction Alert
function stillWorking() {
  alert('Still working on that.');
}
// Click Sound
function play() {
  var audio = document.getElementById('audio');
  audio.play();
}
// Preloader
var preloader = document.getElementById('preloader');
window.addEventListener('load', function () {
  preloader.style.display = 'none';
});
