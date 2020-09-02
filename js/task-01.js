"use strict";
const names = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (array) {
  for (let i = 1; i < array.length; i += 1) {
    console.log(i, array[i]);
  }
};

logItems(names);
logItems(numbers);
