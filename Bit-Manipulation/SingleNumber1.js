/*
Given an array of integers, every element appears twice except for one, which occurs once.
Find that element.
*/

function singleNumber1(A) {
  let n = A.length;

  let ans = 0;

  for (let i = 0; i < n; i++) {
    ans = ans ^ A[i];
  }

  return ans;
}

A = [2, 7, 2, 5, 5, 4, 8, 8, 7];
console.log("Array: ", A);

console.log("Number: ", singleNumber1(A));
