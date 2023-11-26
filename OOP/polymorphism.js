/*
Poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. This is called polymorphism. 
*/

// Base class representing a Shape
class Shape {
  calculateArea() {
    console.log("This is a generic shape; area calculation not defined.");
  }
}

// Subclass representing a Circle
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Overriding the calculateArea method for circles
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Subclass representing a Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Overriding the calculateArea method for rectangles
  calculateArea() {
    return this.width * this.height;
  }
}

// Create instances of Circle and Rectangle
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log("Area of circle: ", circle.calculateArea());
console.log("Area of rectangle: ", rectangle.calculateArea());

/*
We have same method 'calculatearea()' for both Circle and rectangle, but it automatically figures out which formula to use for each shape. That's polymorphism in action!

So, polymorphism is like having a smart calculator that can adapt and use the right formula for different shapes without us having to tell it every detail.
*/
