// IF STATEMENT
const age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

// IF ELSE STATEMENT
const score = 45;
if (score >= 50) {
    console.log("You passed");
} else {
    console.log("You failed");
}

// IF ELSE IF ELSE STATEMENT
const grade = 75;
if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// TERNARY OPERATOR
const isMember = true;
const discount = isMember ? 0.2 : 0;
console.log("Discount:", discount);

// SWITCH STATEMENT
const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}

// LOGICAL OPERATORS
const hasLicense = true;
const hasInsurance = false;
if (hasLicense && hasInsurance) {
    console.log("Can drive");
} else if (hasLicense || hasInsurance) {
    console.log("One requirement met");
}