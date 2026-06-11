let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Admin! can do all things");
    } 
    else if (userRole === "editor") {
        console.log("Welcome, Editor! You have moderate access.");
    }
    else if (userRole === "viewer") {
        console.log("Welcome, Viewer! You have limited access.");
    }
} else {
    console.log("No idea you may be a guest! role: " + userRole);
}