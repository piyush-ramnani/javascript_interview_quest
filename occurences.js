/*
WAP to find the occurences of alphabets in a given string and return an object
with properties as occurences.

Str = hyderabad;

*/

function occ(Str){

    var occurences = {};

    Str.split("").forEach(element => {
       if(occurences.hasOwnProperty(element)===false){
        occurences[element] = 1;
       } else{
        occurences[element]++;
       }
    });

    return occurences;
}

console.log(occ("hyderabad"));