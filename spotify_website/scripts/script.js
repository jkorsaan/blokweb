// JavaScript Document
var mainMenu =
document.querySelector("header #menu");
var menuButton =
document.querySelector("header button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    mainMenu.classList.toggle("toggle");
}