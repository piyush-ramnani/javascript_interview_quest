//filter only returns those elements that fulfills the criteria

A = [1, 3, 3, 4, 6, 8];

const moreThanTwo = A.filter((num) => {
  return num > 2;
});

console.log("Original Array: ", A);
console.log("Filtered result: ", moreThanTwo);

//Returns false if criteria not fulfilled
