// Function to print name letters
function sayMyName() {
    console.log("s");
    console.log("w");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("m");
}
// sayMyName();

// Function with parameters
function addTwoNum(num1, num2) {
    return num1 + num2;
}

// Arguments passed here
const result = addTwoNum(3, 5);
console.log("Value:", result); // Value: 8

// Login function with validation
function loginUser(username) {
    if (!username) {
        return "Please enter username";
    }
    return `${username}, just logged in`;
}
console.log(loginUser("Ravneet"));
console.log(loginUser());

// Default parameter
function username2(student = "Rav") {
    return `${student}, just logged in`;
}
console.log(username2());
console.log(username2("Riya Kaur"));

// Rest operator example
function calculateCartPrice(...prices) {
    return prices;
}
console.log(calculateCartPrice(200, 400, 600));
console.log(calculateCartPrice(200, 400, 600, 800));

// Objects
const user3 = {
    fullname: "Ravneet Kaur",
    price: 234
};
const user4 = {
    fullname: "Ravneet Kaur",
    price: 999
};

// Function to handle object
function handleObject({ fullname, price }) {
    console.log(`Username is ${fullname} and price is ${price}`);
}
handleObject(user3);
handleObject(user4);
handleObject({
    fullname: "Rav",
    price: 2567
});

// Array example
const arr = [32, 45, 67, 89];
function returnSecondValue(array) {
    return array[1];
}
console.log(returnSecondValue(arr)); // 45
