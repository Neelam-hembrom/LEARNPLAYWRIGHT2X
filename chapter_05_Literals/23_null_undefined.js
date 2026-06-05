// 23_null_undefined.js
// Difference between null and undefined in JavaScript

// 1. undefined means a variable has been declared but has not been assigned a value.
let a;
console.log(a); // undefined

// 2. null is an assignment value that represents "no value" or "empty value".
let b = null;
console.log(b); // null

// 3. typeof behavior:
console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (this is a historical JavaScript quirk)

// 4. Comparison:
console.log(a == b);  // true  (loose equality considers them equal)
console.log(a === b); // false (strict equality checks type too)

// 5. Typical uses:
// - undefined: the variable is declared but not initialized, or a function has no return value.
// - null: the developer explicitly sets a variable to indicate "no value".

function noReturn() {
  const x = 5;
}
console.log(noReturn()); // undefined

let user = null;
console.log(user); // null

// 6. Practical example:
let value;
if (value === undefined) {
  console.log('value is undefined: not assigned yet');
}

value = null;
if (value === null) {
  console.log('value is null: explicitly empty');
}
