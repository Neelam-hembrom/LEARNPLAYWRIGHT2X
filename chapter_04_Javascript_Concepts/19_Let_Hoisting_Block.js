//let is Block-Scoped

let x = "global";

if (true) {

    //console.log(x); //TDZ: ReferenceError: Cannot access 'x' before initialization
    let x = "block-scoped";
    console.log(x); // Output: block-scoped
}
console.log(x); // Output: global