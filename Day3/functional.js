// 1. Transform arrays using map and filter
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
console.log(doubled, evens);

// 2. Create reusable utility functions
const square = n => n * n;
console.log(square(5));

// 3. Refactor a function to be pure
// Impure: modifies external variable
let total = 0;
function addImpure(n) { total += n; }

// Pure: depends only on input, no side effects
function addPure(a, b) { return a + b; }
console.log(addPure(3, 4));
