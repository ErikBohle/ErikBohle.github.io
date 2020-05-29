// function myFunctionNav() {
//   document.getElementById("sidenav").classList.toggle("show");
//   }
const sidebar = document.querySelector(".sidenav");

document.querySelector(".navbtn").onclick = function () {
  sidebar.classList.toggle("close");
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
