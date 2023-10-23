/*
You are given A which is the head of a linked list. Also given is the value B and position C. Complete the function that should insert a new node with the said value at the given position.

Notes:
    - In case the position is more than length of linked list, simply insert the new node at the tail only.
    - In case the pos is 0, simply insert the new node at head only.
    - Follow 0-based indexing for the node numbering.

*/

const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("Enter the value you want to insert: ", function (inputB) {
  read.question(
    "Enter the position at which you want to insert the element: ",
    function (inputC) {
      B = inputB;
      C = inputC;

      console.log(insertElementLL(B, C));

      read.close();
    }
  );
});

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Given LinkedList
var A = new Node(1);
A.next = new Node(2);
A.next.next = new Node(3);
A.next.next.next = new Node(4);

function insertElementLL(B, C) {
  var head = A;
  let length = 0;
  let newNode = new Node(B);

  //Length of a LL
  let headCopy = A;
  while (headCopy != null) {
    headCopy = headCopy.next;
    length++;
  }

  //Inserting at 0th pos
  if (C == 0) {
    newNode.next = A;
    head = newNode;

    //inserting at tail pos
  } else if (C >= length) {
    while (head.next != null) {
      head = head.next;
    }
    head.next = newNode;
    //inserting at Cth pos
  } else {
    while (C > 1) {
      head = head.next;
      C--;
    }
    let temp = head.next;
    head.next = newNode;
    newNode.next = temp;
  }

  //printing the LL
  head = A;
  while (head != null) {
    process.stdout.write(head.data + " -> ");
    head = head.next;
  }
}
