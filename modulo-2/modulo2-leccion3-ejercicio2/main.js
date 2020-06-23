"use strict";
let access = document.querySelector(".user__name");
const access1 = "Isabel";
const access2 = "Bárbara";

if (access.innerHTML === access1) {
  access.innerHTML = "Bienvenida,  Isabel";
} else if (access.innerHTML === access2) {
  access.innerHTML = "Bienvenida,  Bárbara";
} else {
  access.innerHTML =
    "Lo siento pero el usuario que has introducido no está registrado";
}
