A = [
  [-5, -4, -3],
  [-1, 2, 3],
  [2, 2, 4],
];

function maxSubMatSum(A) {
  let n = A.length;
  let m = A[0].length;
  let pf = new Array(n).fill(0).map(() => new Array(m).fill(0));
  //declaring a (0) 2D filled array of size A matrix

  pf[n - 1][m - 1] = A[n - 1][m - 1]; //Sorted: declaring last element of pf[][]

  var res = pf[n - 1][m - 1];

  //Last row
  for (let i = m - 2; i >= 0; i--) {
    pf[n - 1][i] = pf[n - 1][i + 1] + A[n - 1][i];
    res = Math.max(pf[n - 1][i], res); //Calculating max sum at each step
  }

  //last column
  for (let i = n - 2; i >= 0; i--) {
    pf[i][m - 1] = pf[i + 1][m - 1] + A[i][m - 1];
    res = Math.max(pf[i][m - 1], res); //Calculating max sum at each step
  }

  //Creating rest of the pf matrix and verifying res
  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
      pf[i][j] = A[i][j] + pf[i + 1][j] + pf[i][j + 1] - pf[i + 1][j + 1];
      res = Math.max(pf[i][j], res);
    }
  }

  return res;
}

console.log("Max submatrix sum is: ", maxSubMatSum(A));
