'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber() {
  let evenNumbers = [];

  for (let i = 0; i < lostNumbers.length; i++) {
    // Si el número es par, meterlo en el evenNumbers con push();
    if (lostNumbers[i] % 2 === 0) {
      evenNumbers.push(lostNumbers[i]);
    }
  }
  for (const number of evenNumbers) {
    console.log(number);
  }
  for (let i = 0; i < lostNumbers.length; i++) {
    // misma lógica pero ahora el resto nos tiene que dar 0 al dividir por 3
    if (lostNumbers[i] % 3 === 0) {
      threeNumbers.push(lostNumbers[i]);
    }
  }

  // 3. Devolver una concatenación de los dos arays anteriores (primero pares, luego múltiplos de tres);
  const result = evenNumbers.concat(threeNumbers);
  console.log(result);
}
