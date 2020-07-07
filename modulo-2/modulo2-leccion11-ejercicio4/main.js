'use strict';
let username = document.querySelector('.username');
const nameTitle = document.querySelector('.js-name');

function enterName() {
  let typeName = username.value;
  nameTitle.innerHTML = typeName;
  localStorage.setItem('typeName', JSON.stringify(typeName));

  const savedTypeName = JSON.parse(localStorage.getItem('typeName'));

  if (savedTypeName === true) {
    nameTitle.innerHtml = savedTypeName;
  }
}

username.addEventListener('keyup', enterName);
