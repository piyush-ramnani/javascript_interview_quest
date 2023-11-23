//Q. Given an array A. For every pair of indices i and j (i != j), find the maximum A[i] & A[j]

function MaxOfAndPair(A) {
  let n = A.length;
  let ans = 0;

  for (let bits = 31; bits >= 0; bits--) {
    let c = 0;

    //to set the count of all bit position
    for (let i = 0; i < n; i++) {
      if (((A[i] >> bits) & 1) !== 0) {
        c++;
      }
    }

    //if we found a potential pair, exclude/ignore the non potential value
    if (c > 1) {
      ans = ans + (1 << bits);

      for (let i = 0; i < n; i++) {
        if (((A[i] >> bits) & 1) == 0) {
          A[i] = 0;
        }
      }
    }
  }

  return ans;
}

A = [7, 11, 25];
console.log("Array:", A);

/*
        7 | 0 0 1 1 1 --> 0
        11| 0 1 0 1 1
        25| 1 1 0 0 1

        c | 1 2 1 2 3 

        c<1 will be ignored and c=0 will be cancelled as 7->0

        output: 9 | 0 1 0 0 1

    */

console.log("Max of & pair: ", MaxOfAndPair(A));
