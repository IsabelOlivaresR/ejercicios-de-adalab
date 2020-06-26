"use strict";

const btn = document.querySelector(".js-text");

function logBtn(event) {
  console.log(event);
}

btn.addEventListener("click", logBtn);
