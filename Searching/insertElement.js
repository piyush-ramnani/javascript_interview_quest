/*
You are given a sorted array A of size N and a target value B.
Your task is to find the index (0-based indexing) of the target value in the array.

    - If the target value is present, return its index.
        Ex: A = [1, 3, 5, 6] | B = 5 | ans = 2 

    - If the target value is not found, return the index of least element greater than equal to B.
        Ex: A = [1, 4, 9] | B = 3 | ans = 1 (position where 3 should be inserted)
*/

function searchInsert(A, B) {
  let n = A.length;

  let l = 0;
  let r = n - 1;

  let ans = -1;

  if (n === 1) {
    return 0;
  }

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (A[mid] === B) {
      return mid;
    } else if (A[mid] > B) {
      r = mid - 1;
      ans = mid;
      //if the element is not found returning least element greater than equal to B
      //because that's where l & r will meet and stop.
    } else {
      l = mid + 1;
    }
  }

  //corner elements (edge cases)
  if (B < A[0]) {
    return 0;
  } else if (B > A[n - 1]) {
    return n;
  }

  return ans;
}

A = [1, 3, 5, 6];
B = 5;
console.log("A: ", A);
console.log("B: ", B);

console.log("Index: ", searchInsert(A, B));
