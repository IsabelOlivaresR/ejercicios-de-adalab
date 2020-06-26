"use strict";

const button = document.querySelector(".js-button");
const input = document.querySelector(".name");

function showMessage() {
  console.log(`Hola, ${input}`);
}

button.addEventListener("click", showMessage);
