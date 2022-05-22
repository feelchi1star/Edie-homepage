// Navbar section
var x = document.querySelector(".nav-item");
var close = document.querySelector(".close");
var navtxt = document.querySelector(".nav-text");
var nav = document.querySelector(".collapse-nav");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction1() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
const lin = document.querySelectorAll(".link > a");
for (let i = 0; i < lin.length; i++) {
  lin[i].addEventListener("click", link);
}
function link() {
  x.classList.toggle("active");
}

function openNav() {
  if (nav.style.display === "block") {
    x.classList.toggle("active");
    close.classList.toggle("deactive");
  } else {
    nav.style.display === "none";
    x.classList.toggle("active");
    close.classList.toggle("deactive");
  }
}
// function closeNav() {
//   if (close.style.display === "block") {
//     x.classList.toggle("deactive");
//     nav.style.display = "none";
//   } else {
//     close.style.display = "none";
//     x.classList.toggle("active");
//   }
// }

nav.addEventListener("click", openNav);


// Sticky

window.onscroll = function () {
  myFunction1();
};

// Sticky function
