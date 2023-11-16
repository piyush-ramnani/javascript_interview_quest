function bthSmallest(A, B) {
  console.log(`Given array: ${A} & Bth el: ${B}`);
  let n = A.length;

  for (let i = 0; i < B; i++) {
    var min = A[i]; // 1, 2
    let minIndex = i; // A[0]:2, A[1]:2
    for (let j = i + 1; j < n; j++) {
      if (A[j] < min) {
        min = A[j]; // 1
        minIndex = j; // 1
      }
    }
    //swap
    let temp = A[i];
    A[i] = A[minIndex];
    A[minIndex] = temp;
  }
  console.log("Sorted Arr: ", A);

  return min;
}

console.log("Bth smallest element", bthSmallest([2, 1, 4, 3, 2], 2));
