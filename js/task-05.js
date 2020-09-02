"use strict";
const checkForSpam = function (message) {
  const words = message.split(" ");
  const isInMessage = words.includes("sale" || "spam");
  return isInMessage;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("spam How to earn fast money?")); // true
