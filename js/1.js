"use strict";

const findLongestWord = function (string) {
  const words = string.split(" ");
  for (word of words) {
    const letters = word.split("");
  }

  // let longestWord = words[0];
  // for (let i = 1; i < string.lenght; i += 1) {
  //   if (string[i] < longestWord) {
  //     longestWord = string[i];
  //   }
  // }
  // return longestWord;
  return words;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

/*-------------------------------------*/

// const findLongestWord = function (string) {
//   let words = string.split(" ");

//   for (const word of words) {
//     letter = word.split("");
//   }

//   return words;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // console.log(x);

/*-------------------------------------*/

//     const word = string.split(" ");

//     for (const letter of word) {
//         let longestWord =
//   }
//     return word;
// };
//   let longestWord = word;

//   for (let i = 0; i < word.lenght; i += 1) {
//     if (word[i] < longestWord) {
//       longestWord = word[i];
//     }
//   }

//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
