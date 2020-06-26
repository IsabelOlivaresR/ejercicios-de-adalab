"use strict";

const pears = {
  maxNumber: 10,
  minNumber: 0,
  currentNumber: 2,
  initialNumber: 6,
  addPear: function () {
    //return pears.currentNumber + 1;
    this.currentNumber = this.currentNumber + 1;
  },
  removePear: function () {
    this.currentNumber = this.currentNumber - 1;
  },
  resetPear: function () {
    //return pears.initialNumber;
    this.currentNumber = this.initialNumber;
  },
};

pears.addPear();
pears.resetPear();
console.log(pears.currentNumber);
