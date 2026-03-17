function checkString(str) {
    if (str.length === 0) {
        console.log("String is empty");
        return;
    }

    if (str[0] === str[str.length - 1]) {
        console.log("Starts and ends with same character");
    } else {
        console.log("Does NOT start and end with same character");
    }
}

checkString("level");   // Same
checkString("hello");   // Not same
