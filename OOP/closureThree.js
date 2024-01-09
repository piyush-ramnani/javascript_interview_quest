//Closures with garbage collection explanation

function outer() {
  var a = 10;
  var b = 20;
  //Since this is not used, it will be removed from the memory also called garbage collection

  return function closureWithOuter() {
    console.log("a : ", a);
  };
}

var accessVariable = outer();

accessVariable(); // Output: "a :  10"
