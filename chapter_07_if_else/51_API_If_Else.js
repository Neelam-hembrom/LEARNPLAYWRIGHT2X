let statusCode = 200;

if (statusCode === 200) {
    console.log("OK: The request has succeeded.");
} else if (statusCode === 404) {
    console.log("Not Found: The requested resource could not be found.");
} else if (statusCode === 500) {
    console.log("Internal Server Error: The server encountered an unexpected condition.");
} else {
    console.log("Unknown status code: " + statusCode);
}   