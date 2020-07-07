'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];
let evenNumbers = [];
let threeNumbers = [];

for (let i = 0; i < lostNumbers.length; i++) {
  if (lostNumbers[i] % 2 === 0) {
    evenNumbers.push(lostNumbers[i]);
    console.log(evenNumbers);
  }
}
for (let i = 0; i < lostNumbers.length; i++) {
  if (lostNumbers[i] % 3 === 0) {
    threeNumbers.push(lostNumbers[i]);
    console.log(threeNumbers);
  }
}
const result = evenNumbers.concat(threeNumbers);
console.log(result);
