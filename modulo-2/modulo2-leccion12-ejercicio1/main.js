'use strict';
const numbers = [1, 2, 3];

/*for (let i = 0; i < numbers.length; i++) {
  const items = document.querySelector('.items');

  const newItem = document.createElement('li');

  const newContent = document.createTextNode(numbers[i]);

  newItem.appendChild(newContent);

  items.appendChild(newItem);
}*/

for (const number of numbers) {
  const items = document.querySelector('.items');

  const newItem = document.createElement('li');

  const newContent = document.createTextNode(number);

  newItem.appendChild(newContent);

  items.appendChild(newItem);
}
