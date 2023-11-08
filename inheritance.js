/*
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class

Note: setTimeOut should have a function as an argument not methods directly!
*/

class Cars {
  constructor(brand) {
    this.carName = brand;
  }
  start() {
    console.log(`${this.carName} engine grouls`);
  }
  drive() {
    console.log("It zooms away into the thin air");
  }
}

//By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
class Race extends Cars {
  constructor(brand) {
    super(brand);
  }

  siren() {
    console.log("Police has arrived!");
  }

  fly() {
    this.start();
    this.drive();
  }
}

let myCar = new Race("Mustang");
let richKid = new Race("Supra");

console.log(myCar.siren());
setTimeout(() => myCar.fly(), 2000);
setTimeout(() => richKid.fly(), 3000);

/*
myCar.fly() & richKid.fly() are executed immediately, without any delay, and it logs the results right away. The setTimeout function receives the result of calling the function as its first argument in this case, which is why result is undefined. So, effectively, you are using setTimeout(undefined, 2000)
*/
