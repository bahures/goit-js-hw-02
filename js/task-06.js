"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("введите число");

  numbers.push(input);

  if (input === null) {
    break;
  }
} while (true);

console.log(numbers);

const add = function (...args) {
  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(input));
