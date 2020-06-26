"use strict";

const input = document.querySelector(".js-input");

function logBtn(event) {
  console.dir(event.currentTarget);
}

input.addEventListener("keyup", logBtn);
