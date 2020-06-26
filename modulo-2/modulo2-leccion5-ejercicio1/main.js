"use strict";

const button = document.querySelector(".js-button");
const paragraph = document.querySelector(".js-p");

function showMessage() {
  paragraph.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", showMessage);
