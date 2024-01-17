//polyfills are custom methods that we can write as prototype

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

A = [1, 2, 4, 5, 7];

const multiplyThree = A.myMap((e, i, arr) => {
  return e * 3;
});

console.log("Original array: ", A);
console.log("New Polyfill Mapped Array: ", multiplyThree);
