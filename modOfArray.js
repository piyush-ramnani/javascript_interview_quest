const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function modOfArray(A, B) {
  const l = A.length;
  result = 0;

  for (let i = 0; i < l; i++) {
    result = (result * 10 + A[i]) % B;
  }
  return result;
}

read.question("Enter an array (comma separated): ", function (userInputA) {
  read.question("Enter the number for mod: ", function (userInputB) {
    let A = userInputA.split(",").map((el) => el);
    let B = userInputB;

    console.log(modOfArray(A, B));

    read.close();
  });
});
