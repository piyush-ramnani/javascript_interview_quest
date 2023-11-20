/*

WAP to add all elements/numbers in a given array.

Arr = [1,4,3,6,2,3,7,9]

*/

function sumArr(Arr){
    var sum =0;
    Arr.forEach(element => {
        sum = sum + element;
    });

    return sum;
}

console.log(sumArr(A=[1,4,3,6,2,3,7,9]));