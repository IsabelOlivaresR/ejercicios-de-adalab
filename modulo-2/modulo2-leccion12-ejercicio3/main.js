'use strict';

let users = [
  {
    Nombre: 'Luisita',
    Apellido: 'Gomez',
    Telefono: '612258468',
  },
  {
    Nombre: 'Amelia',
    Apellido: 'Ledesma',
    Telefono: '484678415',
  },
  {
    Nombre: 'Manuela',
    Apellido: 'Sanabria',
    Telefono: '154871559',
  },
];

const inputName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');
const inputPhone = document.querySelector('#phone');
const profileSelect = document.querySelector('.info-set');

function fillForm() {
  if (profileSelect.value === 'luisita') {
    inputName.value = users[0].Nombre;
    inputLastName.value = users[0].Apellido;
    inputPhone.value = users[0].Telefono;
  } else if (profileSelect.value === 'amelia') {
    inputName.value = users[1].Nombre;
    inputLastName.value = users[1].Apellido;
    inputPhone.value = users[1].Telefono;
  } else if (profileSelect.value === 'manuela') {
    inputName.value = users[2].Nombre;
    inputLastName.value = users[2].Apellido;
    inputPhone.value = users[2].Telefono;
  }
}
profileSelect.addEventListener('change', fillForm);
