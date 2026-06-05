// 26_Literal_Number_all.js
// JavaScript supports several number literal formats and numeric types.

// 1. Decimal literal (base 10)
let decimal = 123;

// 2. Negative decimal
let negative = -45.67;

// 3. Floating-point decimal
let floatNumber = 3.14159;

// 4. Exponential notation (scientific)
let exponential = 1.23e4;     // 12300
let negativeExp = 6.02e-23;   // 6.02 × 10^-23

// 5. Binary literal (base 2)
let binary = 0b1010;          // 10 in decimal

// 6. Octal literal (base 8)
let octal = 0o755;            // 493 in decimal

// 7. Hexadecimal literal (base 16)
let hexadecimal = 0xFF;       // 255 in decimal

// 8. BigInt literal for integers larger than Number.MAX_SAFE_INTEGER
let bigInteger = 9007199254740993n;

// 9. Special numeric values
let notANumber = NaN;
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;

console.log("decimal", decimal, typeof decimal);
console.log("negative", negative, typeof negative);
console.log("floatNumber", floatNumber, typeof floatNumber);
console.log("exponential", exponential, typeof exponential);
console.log("negativeExp", negativeExp, typeof negativeExp);
console.log("binary", binary, typeof binary);
console.log("octal", octal, typeof octal);
console.log("hexadecimal", hexadecimal, typeof hexadecimal);
console.log("bigInteger", bigInteger, typeof bigInteger);
console.log("notANumber", notANumber, typeof notANumber);
console.log("positiveInfinity", positiveInfinity, typeof positiveInfinity);
console.log("negativeInfinity", negativeInfinity, typeof negativeInfinity);

// Notes:
// - JavaScript has one main numeric primitive type: Number.
// - Number values include integers, floats, NaN, and Infinity.
// - BigInt is a separate numeric primitive for very large integers.
// - Numeric literals can be written in decimal, binary, octal, hexadecimal, and exponential forms.
