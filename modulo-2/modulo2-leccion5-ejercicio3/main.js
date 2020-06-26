"use strict";

const paragraph = document.querySelector(".js-p");

function showMessage() {
  document.querySelector("p").innerHTML =
    "154Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea dolorelaudantium laboriosam sint magni dolores quasi. Ipsa dignissimo voluptatem suscipit eos. Voluptas eos incidunt consequuntur repudiandae molestias dicta recusandae.";
}

paragraph.addEventListener("mouseover", showMessage);
