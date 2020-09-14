"use strict";
let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt("Введите число", 0);

  if (input === "" || input === null) break;

  numbers.push(+input);
}

for (const number of numbers) {
  total += number;
}
console.log(total);
