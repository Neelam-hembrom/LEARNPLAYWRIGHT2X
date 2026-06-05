let firstname = "Neelam";
let lastname = "Hembrom";
let fullName = `${firstname} ${lastname}`;
console.log(fullName); // "Neelam Hembrom"
console.log(`Hello, ${fullName}!`); // "Hello, Neelam Hembrom!"


let env = "production";
let apiUrl = `https://api.example.com/${env}/data`;
console.log(apiUrl); // "https://api.example.com/production/data"