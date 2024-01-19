// Check if any given number is of power of two

//Without recursion
function isPowOfTwo(n) {
  while (n > 1) {
    n = n / 2;
  }
  if (n == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isPowOfTwo(64));

console.log("------------------------");

//with recursion
function recPowTwo(n) {
  if (n == 1) {
    return true;
  } else if (n < 1) {
    return false;
  } else {
    let sa = n / 2;
    return recPowTwo(sa);
  }
}

console.log(recPowTwo(64));
