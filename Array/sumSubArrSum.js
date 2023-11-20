/* 
WAP to find sum of all the sub array sum in an array. For example: Arr = [1, 3, 4, 1, 6, 7, 2, 5]

SubArr = [[1],[1,3],[1,3,4],[1,3,4,1]...]
*/

function sumSubArrSum(A){

    const n = A.length;

    let sum = 0;

    for(let i=0; i<n; i++){
        let occurences = (i+1) * (n-i); // (start index) * (end index)
        sum = sum + A[i] * occurences;

        //Occurences are calculated because when we parse all the subarrays, it just means combining all the elements as per their occurences. Here, occurences = (number of elements till the current element in the loop) * (elements after the current element in the loop). Example: the occurence of 6 in all sub arrays would be counted with always s = [0,4] & [4,7] => 5 * 4
    }

    return sum;
}

console.log(sumSubArrSum(Arr = [1, 3, 4, 1, 6, 7, 2, 5]));