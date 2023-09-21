//Every element appears twice except one element in the given array. Find the number in TC: O(n) and SC O(1) that is without using an extra space and nested for loops.

const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function singleNumber(A) {
  let ans = 0n;
  let l = A.length;

  for (let i = 0; i < l; i++) {
    ans = ans ^ BigInt(A[i]);
  }

  return Number(ans);
}

// The map function will take an extra space though, but this is just for input output in the terminal. Cool isn't it? JS can be tricky sometimes. Just to take input output this much extra code
read.question("Enter the array (comma separated): ", function (arr) {
  let A = arr.split(",").map((el) => Number(el));

  console.log(singleNumber(A));

  read.close();
});
