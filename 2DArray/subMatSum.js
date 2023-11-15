/*
Given a matrix of integers A of size N x M and multiple queries Q, for each query, find and return the submatrix sum.

Inputs to queries are top left (b, c) and bottom right (d, e) indexes of submatrix whose sum is to find out.

NOTE:

    # The sum may be large, so return the answer mod 10^9 + 7.
    # Indexing given in B, C, D, and E arrays is 1-based.
    # Top Left 0-based index = (B[i] - 1, C[i] - 1)
    # Bottom Right 0-based index = (D[i] - 1, E[i] - 1)

*/

function subMatSum(A, B, C, D, E) {
  console.log("A: ", A);

  let n = A.length;
  let m = A[0].length;
  let ans = [];
  let mod = 1000000000 + 7;

  let pf = new Array(n).fill(0).map(() => new Array(m).fill(0));
  //declaring a (0) 2D filled array of size A matrix

  //Row prefix
  for (let r = 0; r < n; r++) {
    pf[r][0] = A[r][0];
    for (let c = 1; c < m; c++) {
      pf[r][c] = pf[r][c - 1] + A[r][c];
    }
  }

  //column prefix
  for (let c = 0; c < m; c++) {
    for (let r = 1; r < n; r++) {
      pf[r][c] = pf[r][c] + pf[r - 1][c];
    }
  }

  console.log("completed pf: ", pf);

  //queries with 1 indexing -> 0 indexing
  let q = B.length;
  for (let i = 0; i < q; i++) {
    //Top Left
    let r1 = B[i] - 1;
    let c1 = C[i] - 1;

    //Bottom Right
    let r2 = D[i] - 1;
    let c2 = E[i] - 1;

    //forEach query
    var result = pf[r2][c2];
    if (r1 > 0 && c1 > 0) {
      result = result + pf[r1 - 1][c1 - 1];
    }
    if (r1 > 0) {
      result = result - pf[r1 - 1][c2];
    }
    if (c1 > 0) {
      result = result - pf[r2][c1 - 1];
    }
    result = result % mod; //for large numbers

    //for -ve answers
    if (result < 0) {
      result = result + mod;
    }
    ans.push(Number(result));
  }

  return ans;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = [1, 2];
C = [1, 2];
D = [2, 3];
E = [2, 3];

console.log(subMatSum(A, B, C, D, E));
/*
    NOTE: for first if condition (r1>0 & c1>0) we are not subtracting the left and top areas
    because that condition will run only after (r1>0) & (c1>0) is satisfied. Therefore, we are
    directly adding the subtracted area to the result.

    We are taking mod variable as given in the question, because the result could be large.
    if (result<0) condition is for negative bigInt result to make them positive.

    Example:
        -3 % 5 = 2 && 3 % 5 = 2
    */
