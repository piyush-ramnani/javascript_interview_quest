/* 
WAP to find sum of all the sub array sum in an array. For example: Arr = [1, 3, 4, 1, 6, 7, 2, 5]

SubArr = [[1],[1,3],[1,3,4],[1,3,4,1]...]
*/

function sumSubArrSum(A){

    const n = A.length;

    let sum = 0;

    for(let i=0; i<n; i++){
        let occurences = (i+1) * (n-i);
        sum = sum + A[i] * occurences;
    }

    return sum;
}

console.log(sumSubArrSum(Arr = [1, 3, 4, 1, 6, 7, 2, 5]));