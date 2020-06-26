"use strict";
const showInfo = document.querySelector(".js-p");
const showInfo2 = document.querySelector(".js-p2");

const adalaber1 = {
  name: "Susana",
  age: 34,
  job: "periodista",
  run: "estoy corriendo",
};

console.log(adalaber1.run);
showInfo.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job} `;

const adalaber2 = {};
adalaber2.name = "Rocio";
adalaber2.age = 25;
adalaber2.job = "actriz";
adalaber2.runAMarathon = (distance) =>
  `Estoy corriendo un maratón de ${distance} kilómetros`;

console.log(adalaber2.runAMarathon(50));
showInfo2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job} `;
