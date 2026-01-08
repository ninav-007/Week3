// 1. Simulate async execution using setTimeout
console.log("Start");
setTimeout(() => console.log("Async after 2s"), 2000);
console.log("End");

// 2. callback function
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 2000);
}
fetchData(msg => console.log(msg));
