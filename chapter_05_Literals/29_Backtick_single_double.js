// 29_Backtick_single_double.js
// Examples showing backtick (template), single-quoted, and double-quoted strings

const single = 'single quotes: plain string';
const double = "double quotes: plain string";
const backtick = `backticks: template literal with interpolation -> ${single}`;
const multiline = `backticks allow
multiline strings easily`;

console.log(single);
console.log(double);
console.log(backtick);
console.log(multiline);

// Note: backticks support interpolation and multiline; single and double quotes are equivalent for plain strings.
