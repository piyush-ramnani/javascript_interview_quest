/* --setTimeOut--
The setTimeout function is a way to execute a function after a specified time delay. It is often used in JavaScript for various purposes, including animations, scheduling tasks, or implementing delays in code.

Since we are testing without a browser window, we will manage with the console instead of window.document.getElementById("header");

*/

//PURE FUNCTIONS
const myTimeOut = setTimeout(myGreeting, 5000);

function myGreeting() {
  console.log("Appears after 5 sec");
}

function tenSec() {
  console.log("Logs after 7 sec");
}
setTimeout(tenSec, 7000);

//ANONYMOUS FUNCTION

setTimeout(() => {
  console.log("Logs after 10 sec (anonymous function)");
}, 10000);

/*

please see setTimeOut.html for web page view


--USECASES-- 

Delayed action, notifications, Animations: For web-based animations, setTimeout can be used to control the timing of CSS transitions or animations.

Asynchronous Operations: When working with asynchronous code or APIs, you may use setTimeout to simulate network delays or to schedule tasks to happen after other asynchronous operations have completed.
*/
