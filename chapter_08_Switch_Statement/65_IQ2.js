let testScore = 85;

switch (true) {
    case (testScore >= 90):
        console.log("Grade: A");
        break;
    case (testScore >= 85):
        console.log("Grade: B");
        break;
    case (testScore >= 70):
        console.log("Grade: C");
        break;
    case (testScore >= 50):
        console.log("Grade: D");
        break;
    default:
        console.log("Unsatisfactory");
}