"use strict";

const paragraph = document.querySelector(".js-p");

function background() {
  if (window.scrollY) {
    window.scroll(0, 250);
    paragraph.classList.add(".blue");
  }
}

paragraph.addEventListener("scroll", background);
