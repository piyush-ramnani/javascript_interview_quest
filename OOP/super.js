class Firstname {
  constructor(fname) {
    this.fname = fname;
  }

  nameSeperator() {
    return "-";
  }
}

class FullName extends Firstname {
  constructor(fname, lname) {
    super(fname);
    this.lname = lname;
  }

  getFullName() {
    return this.fname + super.nameSeperator() + this.lname;
  }
}

const myname = new FullName("Piyush", "Ramnani");

console.log("My first name: ", myname.fname);

console.log("My full name: ", myname.getFullName());

/*
# 'super' keyword is used in the child class to access the methods and variables of parent class and is to be used in the constructor of child class.

# The child class should have the constructor with parameters of both classes (parent & child) to be accessed
by the child class.

# methods in parent class can be accessed by using super keyword and variables can be accessed by 'this keyword';
*/
