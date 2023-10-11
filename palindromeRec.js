const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("Enter a string to check Palindrome: ", function (userinput) {
  let I = userinput;
  console.log(isPal(I));
  read.close();
});

function isPal(X) {
  let charArr = X.split("");
  let s = 0;
  let e = charArr.length - 1;

  function solve([], s, e) {
    if (s >= e) {
      return true;
    } else if (charArr[s] == charArr[e]) {
      let sa = solve([], s + 1, e - 1);
      return sa;
    } else {
      return false;
    }
  }

  return solve(charArr, s, e);
}
