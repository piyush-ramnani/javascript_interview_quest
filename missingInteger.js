function firstMissingPositive(A) {
  let n = A.length;

  for (let i = 0; i < n; i++) {
    while (A[i] != i + 1 && A[i] <= n && A[i] >= 1) {
      //swap conditions
      let v = A[i]; //check element
      //swap
      let temp = A[i];
      A[i] = A[v - 1];
      A[v - 1] = temp;

      //if duplicate is found for swap
      if (A[i] == A[v - 1]) {
        break; //continues the for loop
      }
    }
  }

  //checking for the number to return
  for (let i = 0; i < n; i++) {
    if (A[i] != i + 1) {
      return i + 1; //returning the number that is not found.
    }
  }
  return n + 1; //if all the positives are sorted and found in the array.
}

A = [-1, 3, 2, 5, 1, 6];
console.log("A: ", A);

console.log("The first missing positive number: ", firstMissingPositive(A));
