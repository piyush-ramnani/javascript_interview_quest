//Transformation or computation of arrays

A = [1, 2, 4, 5, 7];

const multiplyThree = A.map((e) => {
  return e * 3;
});

console.log("Original array: ", A);
console.log("New Mapped Array: ", multiplyThree);
