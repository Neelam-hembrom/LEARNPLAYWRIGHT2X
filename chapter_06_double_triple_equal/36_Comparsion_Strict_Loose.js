//number == string
console.log(3 == "3"); // true (loose equality, type coercion)
console.log(3 === "3"); // false (strict equality, no type coercion)

//boolean == number
console.log(0 == false); // true (loose equality, type coercion)
console.log(0 === false); // false (strict equality, no type coercion)

//null == undefined
console.log(null == undefined); // true (loose equality, null and undefined are considered equal)
console.log(null === undefined); // false (strict equality, different types)    

console.log(0 == ""); // true (loose equality, empty string is falsy)
console.log(0 === ""); // false (strict equality, different types)

console.log(true == 1); // true (loose equality, type coercion) 
console.log(true === "1"); // false (strict equality, different types)