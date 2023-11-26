/*
Given an array of integers, every element appears thrice except for one, which occurs once.

Find that element that does not appear thrice.

NOTE: Your algorithm should have a linear runtime complexity.

Could you implement it without using extra memory?
*/

function singleNumber2(A) {
  let n = A.length;
  let ans = 0;

  //For each bit of elements
  for (let bit = 31; bit >= 0; bit--) {
    let c = 0;

    //for each element of the array
    for (let el = 0; el < n; el++) {
      if ((A[el] >> bit) & (1 == 1)) {
        c++;
      }
    }

    //setting the remaining element bit
    if (c % 3 == 1) {
      ans = ans | (1 << bit);
    }
  }
  return ans;
}

A = [1, 2, 4, 3, 3, 2, 2, 3, 1, 1];

console.log("Array: ", A);

console.log("Number: ", singleNumber2(A));
