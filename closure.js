//--CLOSURE--

function createCircle(radius) {
  this.radius = radius;

  let abstractObject = {
    x: 0,
    y: 0,
  };

  let abstractFunction = function (num) {
    console.log(
      `abstract object values changed by inner function x: ${
        abstractObject.x + num
      } & y: ${abstractObject.y + num}`
    );
  };

  this.draw = function () {
    console.log("Inner function - also called closure");
    console.log(`Initially x: ${abstractObject.x}, y: ${abstractObject.y}`);
    setTimeout(() => {
      abstractFunction(1);
    }, 2000);
    //this.radius;
  };
}

const circle = new createCircle(1);
circle.draw();

/*
 DIFFERENCE B/W SCOPE & CLOSURE:

 # Memory is freed up when the scope is completed. For example if we declare any variable in draw() method, x and y would be removed from memory after the program is executed. HOWEVER, closure preserves the state of the parent properties and methods in the memory even after the program has completed its execution.


 ABSTRACTION:

 if 'let' is used instead of 'this' the properties or methods would not be accessible from outside. For example: if we were to call 'circle.abstractObject' it would throw an error. We can only access non-abstract properties or methods from outside the function 'createCircle()'.


*/
