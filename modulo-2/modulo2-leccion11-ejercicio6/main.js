'use strict';
let username = document.querySelector('.username');
const nameTitle = document.querySelector('.js-name');
let lastName = document.querySelector('.lastName');
const lastNameTitle = document.querySelector('.js-lastName');
let formData = {};

function enterName() {
  formData.name = username.value;
  nameTitle.innerHTML = formData.name;
  formData.lastName = lastName.value;
  console.log(formData.lastName);
  lastNameTitle.innerHTML = formData.lastName;

  localStorage.setItem('formData', JSON.stringify(formData));

  const savedFormData = JSON.parse(localStorage.getItem('formData'));
  console.log(savedFormData);
}

username.addEventListener('keyup', enterName);
lastName.addEventListener('keyup', enterName);
