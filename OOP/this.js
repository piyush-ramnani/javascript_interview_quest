// IMPLICIT BINDING | 'this' keyword

this.a = 5;
console.log("window object (in case of browsers)", this); //window object

let normalUser = {
  name: "Piyush",
  age: 24,
  getDetails() {
    console.log(`Name : ${this.name} , Age : ${this.age}`);
  },
};

normalUser.getDetails(); // Name : Piyush , Age : 24
console.log("--------------------");

//--------------------------------------------------------

let nestedUser = {
  name: "Piyush",
  age: 24,
  childObj: {
    newName: "Piyush Ramnani",
    getDetails() {
      console.log(`newName : ${this.newName} , name : ${this.name}`);
    },
  },
};

nestedUser.childObj.getDetails(); // newName: Piyush Ramnani , name: undefined
console.log("--------------------");
//--------------------------------------------------------

const user = {
  name: "Piyush",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

console.log(user.greet()); //Hello Piyush
console.log(user.farewell()); //Goodbye, undefined
console.log("--------------------");
