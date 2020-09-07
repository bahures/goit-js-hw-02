"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("введите число");
  if (input === null) {
    break;
  }
  input = Number(input);
  numbers.push(input);

  for (const number of numbers) {
    total += number;
  }
} while (true);

console.log(total);
