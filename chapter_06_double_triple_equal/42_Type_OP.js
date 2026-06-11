console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a quirk in JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are a type of object)
console.log(typeof function(){}); // "function" (functions are a special type of object)

// Note: typeof is useful for checking the type of a value, but be aware of quirks like null being "object".    