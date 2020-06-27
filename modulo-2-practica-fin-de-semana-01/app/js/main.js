"use strict";

//SELECTORS...
const userName = document.querySelector(".js-user-name");
const password = document.querySelector(".js-user-password");
const button = document.querySelector(".js-login-button");
const alertMessage = document.querySelector("p");
const formData = {};
//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
  name: "front23",
  password: "bicicleta",
};

//FUNCTIONS
function setFormData(ev) {
  formData.name = userName.value;
  formData.password = password.value;
}
function sendData(ev) {
  if (
    userName.value === userInfo.name &&
    password.value === userInfo.password
  ) {
    alert("estás dentro");
  } else {
    attemps = attemps + 1;
    alertMessage.classList.remove("hidden");
  }
  if (attemps >= 3) {
    alert("estás bloqueado");
  }
}

//LISTENERS
userName.addEventListener("keyup", setFormData);
password.addEventListener("keyup", setFormData);
button.addEventListener("click", sendData);
