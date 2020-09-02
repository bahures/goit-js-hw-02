"use strict";

const findLongestWord = function (string) {
  const word = string.split(" ");
  let biggestWord = word[0];
  for (let i = 1; i < word.length; i += 1) {
    if (word[i].length > biggestWord.length) {
      biggestWord = word[i];
    }
  }

  return biggestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
