//Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Circle by factory function");
    },
  };
}
const factoryCircle = createCircle(1);
factoryCircle.draw();
console.log(factoryCircle.constructor());

//Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Circle by Constructor function");
  };
}
const constructorCircle = new Circle(1);
constructorCircle.draw();
console.log(constructorCircle.constructor());

/*

# Both function definition is equivalent and has no major difference in their usage.

# keyword 'new' is needed for Constructor function. If new is not declared, the function will define the properties and methods into the global scope which is problematic | window object if using browser console, node global scope if using node environment.

# 'this' => helps us point the properties and methods towards the function that we created.

# In JS every object has constructor by default that references the function that created the object. Example: Circle.call({}, 1) OR Circle.apply({}, [1, 2, 3]) - calling inbuilt constructors for the same function. It creates an object in the first argument and passes the parameter as 2nd argument.
*/
