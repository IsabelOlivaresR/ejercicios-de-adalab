'use strict';

let numbers = [];
function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }
  for (const number of numbers) {
    console.log(number);
  }
  return numbers;
}

console.log(numbers);

function getReversed100Numbers() {
  numbers.reverse();
  for (const number of numbers) {
    console.log(number);
  }
}

get100Numbers();
getReversed100Numbers();
