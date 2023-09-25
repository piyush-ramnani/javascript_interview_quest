/*
QUESTION:
You are given an array A of N elements. Sort the given array in increasing order of number of distinct factors of each element, i.e., element having the least number of factors should be the first to be displayed and the number having highest number of factors should be the last one. If 2 elements have same number of factors, then number with less value should come first.
*/

function solve(A) {
  //increasing order of factors.

  function compare(a, b) {
    let numA = countFactors(a);
    let numB = countFactors(b);

    if (numA > numB) {
      return 1; //swap needed : Factors of A greater than factors of B
    } else if (numA < numB) {
      return -1; //no swap needed
    } else {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      } //swap as per value
    }
  }

  function countFactors(x) {
    let count = 0;
    x = Number(x);
    //console.log(x);
    for (let i = 1; i * i <= x; i++) {
      //Example x = 25 | i <= 5 | factors of any number are till the number's root.
      if (x % i == 0) {
        //checks till 5 -> 1, 5
        count += 2; // 4
      }
      if (i * i == x) {
        count--; // 3
      }
    }
    return count;
  }

  //bubble sort (with 2 for loops) will not work.
  return A.sort(compare);
}

console.log(solve([34, 5, 75, 33, 6, 92, 45, 100]));

//You can directly run the program or change the value of array in console.log

//Enter any array of your choice and keep a pen and paper ready to match the answer ;)
