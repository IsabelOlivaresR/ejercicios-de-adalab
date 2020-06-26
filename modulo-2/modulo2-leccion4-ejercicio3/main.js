"use strict";

const IVAvalue = 0.21;

function IVAcalc(a) {
  return a + a * IVAvalue;
}

console.log(IVAcalc(6));
console.log(IVAcalc(7));
console.log(IVAcalc(8));
