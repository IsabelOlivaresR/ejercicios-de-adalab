'use strict';

const ENDPOINT =
  'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json';

let users = [];
let favorites = [];

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    let princess = '';

    for (let i = 0; i < data.length; i++) {
      const picture = data[i].picture;
      const comment = data[i].comment;
      const name = data[i].name;

      const avatar = `<div class="avatar__container">
      <img src="${picture}">
      <h3 class="name">${name}</h3>
      </div>`;

      const description = `<div class="description__container">
      <p class="description">${comment}</p>
      </div>`;

      const item = `<li class="princess-item">${avatar + description}</li>`;
      princess += item;
    }

    const list = document.querySelector('.js-user-list');
    list.innerHTML = princess;

    users = document.querySelectorAll('.princess-item');

    for (let i = 0; i < users.length; i++) {
      users[i].addEventListener('click', selectPrincess);
    }
  });
