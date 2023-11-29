/*
Given an array of integers A, find and return the peak element in it.
An array element is considered a peak if it is not smaller than its neighbors. For corner elements, we need to consider only one neighbor.
*/

function peakElement(A) {
  let n = A.length;

  //Edge cases
  if (n == 1) {
    return A[0];
  }
  if (A[0] > A[1]) {
    return A[0];
  }
  if (A[n - 1] >= A[n - 2]) {
    return A[n - 1]; //Corner element
  }

  let l = 0;
  let r = n - 1;

  while (l <= r) {
    //untill the search space is exhausted
    let mid = Math.floor((l + r) / 2);

    if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
      return A[mid];
    } else if (A[mid - 1] > A[mid]) {
      //look in the left (cutting search space)
      r = mid - 1;
    } else {
      //look in the right (cutting search space)
      l = mid + 1;
    }
  }
}

A = [1, 2, 3, 4, 5];
console.log("Array: ", A);
console.log("Peak element: ", peakElement(A));
