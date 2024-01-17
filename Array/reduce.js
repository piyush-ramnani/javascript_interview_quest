//Reduces array of values down to only 1 value

const A = [1, 3, 6, 4, 2, 7];

const reducedSum = A.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

//If the initial value is not provided (0 in this case), it will default to first value in the accumulator

console.log("Original array: ", A);
console.log("Reduced sum: ", reducedSum);
