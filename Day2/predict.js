// 1. Predict outputs for hoisting examples
console.log(a); // undefined (var is hoisted)
var a = 10;

// 2. Build a counter using closures
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    value: () => count
  };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

// 3. Explain scope behavior using comments
function testScope() {
  if (true) {
    let blockScoped = "Only inside block";
    var functionScoped = "Accessible throughout function";
  }
  // console.log(blockScoped); // ❌ Error
  console.log(functionScoped); // ✅ Works
}
testScope();
