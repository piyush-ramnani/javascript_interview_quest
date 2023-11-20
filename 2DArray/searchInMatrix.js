/*
Given a matrix of integers A of size N x M and an integer B.

In the given matrix every row and column is sorted in non-decreasing order. Find and return the position of B in the matrix in the given form:

If A[i][j] = B then return (i * 100 + j * 100)
If B is not present return -1.

*/

function searchInSortedMatrix(A, B) {
  let n = A.length;
  let m = A[0].length;
  let ans = Infinity;

  let r = 0;
  let c = m - 1;

  while (r < n && c >= 0) {
    let value = A[r][c];

    if (B == value) {
      ans = Math.min(r * 100 + c * 100, ans); //for dupliate values in a matrix
    }

    if (B > value) {
      r = r + 1;
    } else if (B <= value) {
      c = c - 1;
    }
  }
  if (ans === Infinity) {
    return -1;
  } else {
    return ans;
  }
}

A = [
  [1, 2, 4, 9],
  [8, 9, 12, 13],
  [20, 21, 28, 30],
];
B = 12;

console.log(searchInSortedMatrix(A, B));
