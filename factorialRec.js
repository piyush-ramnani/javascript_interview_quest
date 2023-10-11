const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("Enter a number for its factorial: ", function (userInput) {
  let I = userInput;
  console.log(fact(I));
  read.close();
});

function fact(X) {
  if (X === 0 || X === 1) {
    return X;
  } else {
    let sa = fact(X - 1);
    return sa * X;
  }
}
