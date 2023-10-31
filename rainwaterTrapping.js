/*

Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1,

Example:

|
|
|                            |```|
|          |```|             |   |
| |```|    |   |    |```|    |   |
|_|   |____|   |____|   |____|   |__ 

compute how much water it is able to trap after raining, given an array A with non negative values.

*/

const readline = require("readline");

//internal function of readline
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r.question(
  "specify a positive vector array(comma separated) | Example: 2,3,5,1,4,2,1: \n",
  function (inputA) {
    let A = inputA.split(",").map((num) => parseInt(num, 10));
    // string inputB => 2D array
    console.log("\nInput :", A);

    console.log(rainwaterTrapping(A));
    r.close();
  }
);

//Water trapped = Minimum of (height max on left & height max on right) - building height. Minimum because water can be held at the height of minimum building only. Max because we need how a storage where water will be trapped between two buildings on either side.

function rainwaterTrapping(A) {
  let l = A.length;

  //prefix array for Max building on left
  let pf = [];
  pf[0] = A[0];
  for (let i = 1; i < l; i++) {
    pf[i] = Math.max(pf[i - 1], A[i]);
  }
  console.log("pf: ", pf);

  //suffix array for Max building on right
  let sf = [];
  sf[l - 1] = A[l - 1];
  for (let i = l - 2; i >= 0; i--) {
    sf[i] = Math.max(sf[i + 1], A[i]);
  }
  console.log("sf: ", sf);

  //forEach building (el), check if water traps | if (Left Max > el < Right Max)
  let ans = 0;
  for (let i = 0; i < l; i++) {
    let water = Math.min(pf[i], sf[i]) - A[i];
    ans = ans + water;
  }

  return `\nANS: ${ans} units of water trapped`;
}
