let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18? "Yes, he will go to Goa" : "No, he will not go to Goa";
console.log(rj_will_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;

let testResult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testResult);

let environment = "staging";
let baseUrl = environment === "prod"
  ? "https://api.staging.com"
  : "https://api.production.com";
console.log(baseUrl);

let condition = true;
let isSRKMale = condition ? "Condition is true" : "Condition is false";
console.log(isSRKMale);

// Nested Ternary

// Multiple Condition
let age = 26;
let is_neelam_goa = age > 26 ? (age <= 60 ? "Yes, Neelam will go to Goa" : "No, Neelam will not go to Goa") : "No, Neelam will not go to Goa";
console.log(is_neelam_goa);


//-----------------------------------------------------
let statusCode = 404;
let category = 
    statusCode < 300 ? "Success" :
        statusCode < 404 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


let a = 10, b = 15, c = 8;
let result = a > b ? (a > c ? " a is greatest" : "c is greatest") : "b is greatest";
console.log(result);


let temperature = 35;
let feel = (temperature >= 40) ? "Very Hot" :
    (temperature >= 30) ? "Hot" :
        (temperature >= 20) ? "Warm" :
            (temperature >= 10) ? "Cool" : "Cold";
console.log("7. Tempature: " ,  temperature + "°C, Feeling: " + feel);
