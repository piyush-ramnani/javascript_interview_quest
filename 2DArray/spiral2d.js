//Edit the parameter A : integer

let A = 5;

function generateMatrix(A) {
  //generates a 2D matrix filled with 0 of dimensions [A] x [A]
  const mat = Array.from({ length: A }, () => Array(A).fill(0));

  let el = A - 1;

  let i = 0;
  let j = 0;
  num = 1;
  //edge case - to print the center element
  while (el >= 0) {
    if (el === 0) {
      mat[i][j] = num;
      //console.log("edge case running!!!");
      break;
    }

    //--Outer boundary--

    //first row:
    for (let print = 1; print <= el; print++) {
      mat[i][j] = num;
      j++;
      num++;
    }
    //last column
    for (let print = 1; print <= el; print++) {
      mat[i][j] = num;
      i++;
      num++;
    }

    //last row
    for (let print = 1; print <= el; print++) {
      mat[i][j] = num;
      j--;
      num++;
    }

    //first column
    for (let print = 1; print <= el; print++) {
      mat[i][j] = num;
      i--;
      num++;
    }

    i++;
    j++;

    //moving inwards for print value / number of elements to be printed in each loop
    el = el - 2;
  }
  return mat;
}

console.log(generateMatrix(A));
