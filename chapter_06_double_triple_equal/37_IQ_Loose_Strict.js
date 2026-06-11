console.log(0 == ""); // true (loose equality, empty string is falsy)
console.log(0 === ""); // false (strict equality, different types)  
console.log("" == "0"); //transitive property of equality
console.log("" === "0"); // false (strict equality, different strings)