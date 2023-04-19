// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchData() {
  // create an array of promises that fetch data from each API url
  const promises = apiUrls.map(url => fetch(url));

  // measure the time taken for Promise.all to complete the API calls
  const startAll = performance.now();
  Promise.all(promises)
    .then(responses => {
      const endAll = performance.now();
      const timeAll = endAll - startAll;
      // display the time taken in the table with id "output-all"
      document.getElementById("output-all").textContent = `${timeAll.toFixed(2)} ms`;
    })
    .catch(error => console.error(error));

  // measure the time taken for Promise.any to complete the API calls
  const startAny = performance.now();
  Promise.any(promises)
    .then(response => {
      const endAny = performance.now();
      const timeAny = endAny - startAny;
      // display the time taken in the table with id "output-any"
      document.getElementById("output-any").textContent = `${timeAny.toFixed(2)} ms`;
    })
    .catch(error => console.error(error));
}

// call the fetchData function on page load
window.addEventListener("load", fetchData);
