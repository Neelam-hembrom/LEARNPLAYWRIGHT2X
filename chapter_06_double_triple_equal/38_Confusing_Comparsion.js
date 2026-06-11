// 38_Confusing_Comparsion.js
// JavaScript can be confusing when comparing values with == and ===.

console.log(0 == "");        // true: "" converts to 0 with loose equality
console.log(0 === "");       // false: different types (number vs string)

console.log(false == "0");    // true: "0" converts to number 0, false converts to 0
console.log(false === "0");   // false: different types

console.log(null == undefined); // true: loose equality treats them as equal
console.log(null === undefined); // false: different types

console.log([] == false);      // true: array converts to empty string, then to 0
console.log([] === false);     // false: different types

console.log([1,2] == "1,2"); // true: array becomes string "1,2" with loose equality
console.log([1,2] === "1,2"); // false: different types

// Summary: use === for predictable comparison because it does not convert types.
