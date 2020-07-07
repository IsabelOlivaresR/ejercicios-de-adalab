'use strict';
let username = document.querySelector('.username');
let button = document.querySelector('.btn');
let characters = [];

function getUser() {
  let characterSW = username.value;
  fetch('https://swapi.dev/api/people/').then((response) =>
    response.json().then((data) => {
      characters = data;
      console.log(characters);
      for (let i = 0; i < characters.length; i++) {
        if (data.name === characterSW) {
          const name = document.querySelector('.js-name');
          const gender = document.querySelector('.js-gender');

          name.innerHTML = data.name;
          gender.innerHTML = data.gender;
        }
      }

      //return data;
    })
  );
}

button.addEventListener('click', getUser);
