Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) res.push(this[i]);
  }
  return res;
};

A = [1, 3, 3, 4, 6, 8];

const moreThanTwo = A.myFilter((num) => {
  return num > 2;
});

console.log("Original Array: ", A);
console.log("Polyfill-Filtered result: ", moreThanTwo);
