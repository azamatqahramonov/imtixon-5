import "./style.css";

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const closeButton = document.getElementById("closeButton");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

closeButton.addEventListener("click", () => {
  menu.classList.add("hidden");
});


