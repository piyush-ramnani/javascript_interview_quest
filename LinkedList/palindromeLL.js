//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

//definition of LL
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Given LL
var A = new Node(1);
A.next = new Node(2);
A.next.next = new Node(2);
A.next.next.next = new Node(1);

const isPalindrome = function (head) {
  let string1 = "";
  let string2 = "";

  while (head != null) {
    string1 = `${string1}${head.data}`;
    string2 = `${head.data}${string2}`;
    head = head.next;
  }

  return string1 === string2;
};

console.log(isPalindrome(A));
