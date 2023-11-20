/*
Given a string, toggle the characters, i.e, if in uppercase toggle to lowercase and vice versa.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the String: ", function (inputString) {
  let str = inputString;
  console.log(Solve(str));
  rl.close();
});

function Solve(A) {
  let l = A.length;

  let strArr = [];

  for (let i = 0; i < l; i++) {
    ch = A.charCodeAt(i);
    ch = ch ^ (1 << 5);
    strArr[i] = String.fromCharCode(ch);
  }

  return strArr.join("");
}
