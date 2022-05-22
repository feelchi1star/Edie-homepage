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
