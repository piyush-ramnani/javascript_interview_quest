/*
You are given a 0-indexed array of strings words and a character x.
Return an array of indices representing the words that contain the character x.

Example:
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
*/

function findWordsContaining(words, x) {
  let n = words.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    let index = words[i].indexOf(x); //returns 1 or -1
    if (index != -1) {
      result.push(i);
    }
  }

  return result;
}

words = ["fizz", "buzz", "zap", "nap"];
x = "z";

console.log("given array of words:", words);
console.log("Find:", x);

console.log(
  "Indices of words with the letter: ",
  findWordsContaining(words, x)
);
