//TC: NlogN | SC: N


function mergeTwoSorted(A, B) {
  console.log(`Array 1: [${A}] | Array 2: [${B}]`);

  let n = A.length;
  let m = B.length;

  var mergedArr = new Array(n + m).fill(0);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < n && j < m) {
    if (B[j] < A[i]) {
      mergedArr[k] = B[j];
      j++;
      k++;
    } else {
      mergedArr[k] = A[i];
      i++;
      k++;
    }
  } //mergedArr: [2, 4, 7, 9]

  while (j < m) {
    mergedArr[k] = B[j];
    j++;
    k++;
  }

  while (i < n) {
    mergedArr[k] = A[i];
    i++;
    k++;
  }

  return `Merged Arr: [${mergedArr}]`;
}

console.log(mergeTwoSorted([4, 7, 9], [2, 11, 19]));
