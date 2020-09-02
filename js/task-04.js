"use strict";

const formatString = function (string) {
  const symbhols = string.split("");
  if (symbhols.length > 40) {
    symbhols.splice(40);
    return symbhols.join("") + " ...";
  } else {
    return string;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
