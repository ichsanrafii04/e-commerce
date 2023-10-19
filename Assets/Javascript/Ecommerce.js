const barsMenu = document.getElementById("dropdown");
const typeMenu = document.getElementById("type");
const men = document.getElementById("men");
const women = document.getElementById("women");
const contents = document.getElementById("contentsWrap");
const footer = document.getElementById("kaki");

function bars() {
  barsMenu.classList.toggle("open-bars");
}
function typebtn() {
  typeMenu.style.display = "flex";
}
function menBtn() {
  men.style.display = "block";
  if ((men.style.display = "block")) {
    women.style.display = "none";
    contents.style.display = "none";
    footer.style.display = "none";
  }
}
function womenBtn() {
  women.style.display = "block";
  if ((women.style.display = "block")) {
    men.style.display = "none";
    contents.style.display = "none";
    footer.style.display = "none";
  }
}

// LAPTOP
const menu = document.getElementById("menuTipe");

function tipe() {
  menu.classList.toggle("muncul");
}
