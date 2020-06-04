function openNav() {
  document.getElementById("sidenav").style.width = "10em";
  // document.getElementById("main").style.marginLeft = "52em";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0em";
  // document.getElementById("main").style.margin = "0em";
} 

var nightModeToggleButton = document.querySelector(".slider");
var container = document.querySelector(".container");
var para = document.querySelector(".main");
var body = document.querySelector("body");


nightModeToggleButton.onclick = function () {
  nightModeToggleButton.classList.toggle("night-mode");
  container.classList.toggle("night-mode");
  container.classList.toggle("night-mode");
  para.classList.toggle("night-mode");
  body.classList.toggle("night-mode");
};