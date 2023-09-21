// Given a decimal number a, convert it to the given number base B

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

function decimalToBase(A, B) {
  //A = 15; B = 4
  if (A === 0) {
    return 0;
  }

  let toBaseB = "";
  while (A > 0) {
    const remainder = A % B;
    toBaseB = remainder.toString() + toBaseB; //"2"
    A = Math.floor(A / B);
  }
  const result = parseInt(toBaseB, 10);
  return result;
}

r1.question("Enter a value for A: ", function (userInputA) {
  r1.question("Enter a value for B: ", function (userInputB) {
    const A = parseInt(userInputA, 10);
    const B = parseInt(userInputB, 10);

    console.log(decimalToBase(A, B));

    r1.close();
  });
});
