

console.log(null >= 0);  // true
console.log(null === 0);   // false


//Nullish
let amul = null;
let milk_required = amul ?? "nandini milk";
console.log(milk_required);  // "nandini milk"

let amul1 = "amul present";
let milk_required1 = amul1 ?? "nandini milk";
console.log(milk_required1);  // "amul present"