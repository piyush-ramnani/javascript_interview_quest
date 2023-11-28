/*
    Non-blocking Code Execution:
        Callbacks allow you to perform other tasks while waiting for asynchronous operations to complete, avoiding blocking the execution of the code.

    Handling Results or Errors:
        Callbacks provide a mechanism to handle the results of asynchronous operations or any errors that may occur during the process.

    Flexibility:
        Callbacks make it easy to customize the behavior of your code after an asynchronous operation completes. You can pass different callback functions for different scenarios.
*/

function fetchData(url, callback) {
  // Simulate a network request using fetch
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Once the data is available, execute the callback function
      callback(null, data); // Pass null as the error (no error occurred)
    })
    .catch((error) => {
      // If there's an error, pass it to the callback function
      callback(error, null);
    });
}

// Usage of fetchData with a callback function
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

fetchData(apiUrl, (error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
});
