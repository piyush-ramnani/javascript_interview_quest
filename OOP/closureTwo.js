//Closures with constructor functions
function Counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

const myCounter = new Counter();
myCounter.incrementCounter();
myCounter.decrementCounter();

/*
 - No garbage collection
 - overconsumption of memory
 - memory leaks due to accumulation
*/
