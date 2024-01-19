/*
Given a number 'n', find the first 'n' elements of the Fibonacci sequence
(0, 1, 1, 2, 3, 5, ...).
*/

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fib(8));
