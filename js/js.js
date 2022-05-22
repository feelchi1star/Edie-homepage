// Navbar section
var x = document.getElementById("mylinks");
var open = document.querySelector("#open");
var close = document.querySelector("#close");
function myFunction() {
  if (x.style.display === "none") {
    x.style.display = "block";
    close.style.display = "block";
    open.style.display = "none";
  } else {
    x.style.display = "block";
    close.style.display = "block";
    open.style.display = "none";
  }
}
var nav = document.querySelector(".collapse-nav");
nav.addEventListener("click", myFunction);
function closeNav() {
  open.style.display = "block";
  close.style.display = "none";
  x.style.display = "none";
}
close.addEventListener("click", closeNav);
// Sticky
var li = document.querySelectorAll(".link >a");
window.onscroll = function () {
  myFunction1();
};
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", closeNav);
}

// link onclick effect

function link() {
  x.style.display = "none";
}

// Sticky function
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction1() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
