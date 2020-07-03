'use strict';

function get100Numbers() {
  let numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(i + 1);
  }
  for (const number of numbers) {
    console.log(number);
  }
}

get100Numbers();
