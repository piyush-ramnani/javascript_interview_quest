/*
There are A beggars sitting in a row outside a temple. Each beggar initially has an empty pot. When the devotees come to the temple, they donate some amount of coins to these beggars. Each devotee gives a fixed amount of coin(according to their faith and ability) to some K beggars sitting next to each other.

Given the amount P donated by each devotee to the beggars ranging from L to R index, where 1 <= L <= R <= A, find out the final amount of money in each beggar's pot at the end of the day, provided they don't fill their pots by any other means.
For ith devotee B[i][0] = L, B[i][1] = R, B[i][2] = P, given by the 2D array B
*/

const readline = require("readline");

//internal function of readline
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r.question("Enter the number of beggars: ", function (inputA) {
  r.question(
    "specify distribution / querry array (comma and space seperated | Example: 2 4 10 , 3 5 20): \n",
    function (inputB) {
      let A = parseInt(inputA, 10);
      // Parse string inputA as an integer
      let B = inputB
        .split(" , ")
        .map((row) => row.split(" ").map((num) => parseInt(num, 10)));
      // Parse the 2nd string input into 2D array of integers
      console.log("A :", A);
      console.log("B: ", B);

      beggarArray(A, B);
      r.close();
    }
  );
});

function beggarArray(A, B) {
  let result = [...Array(A)].map(() => 0);
  //Creates an empty array of Array(length)

  let l = B.length;

  console.log("\ninitial result array: ", result);

  for (let i = 0; i < l; i++) {
    let L = B[i][0];
    let R = B[i][1];
    let P = B[i][2];
    //for each iteration, assigning L & R accordingly

    result[L - 1] += P;
    if (R < result.length) result[R] += -1 * P;
    //if the element is beyond the array length, no point in taking the value
  }

  //carry forward of the values in the array (prefix max)
  for (let i = 1; i < A; i++) {
    result[i] = result[i] + result[i - 1];
  }

  return console.log("result:", result);
}
