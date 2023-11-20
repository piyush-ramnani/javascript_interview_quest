function largestNumber(A) {
  let l = A.length;

  // for(let j=0; j<l-1; j++){
  //     for(let i=0; i<l-1-j; i++){     //Only 1 loop will give one iteration with the swaps however, we will need 2 for loops for making sure we get the greatest number.
  //         if(compare(A[i],A[i+1])===-1){
  //             let temp = A[i];
  //             A[i] = A[i+1];
  //             A[i+1] = temp;
  //         }
  //     }
  // }
  //as per the session two for loops would not work due to TLE
  // Got help from TA on this

  //return A.join("");

  function compare(a, b) {
    let str = "";
    let str1 = str + a + b;
    str1 = parseInt(str1, 10);
    let str2 = str + b + a;
    str2 = parseInt(str2, 10);

    if (str1 > str2) {
      // if first element is greater no swap (-1)
      return -1;
    } else if (str2 > str1) {
      // if second element is greater swap (1)
      return 1;
    } else {
      return 0; //already arranged
    }
  }

  A.sort(compare);

  if (A[0] === 0) {
    return "0";
  }

  return A.join("");
}

console.log(largestNumber([3, 5, 8, 14, 55, 32, 20, 17]));
//Edit the array input as needed
