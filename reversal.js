/*
Given a sentece in a string, reverse each word and return that sentence.

Str = "Aj mausam badaa baimaan hai"

*/

const Str = "Aj mausam badaa baimaan hai";

var Arr = Str.split(" ").map(reverse);

function reverse(words){
    return words.split("").reverse().join("");
}

console.log(Arr.join(" "));

