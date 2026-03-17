 function isOnlyDigits(str) {
    return /^[0-9]+$/.test(str);
}

console.log(isOnlyDigits("12345"));   // true
console.log(isOnlyDigits("123a5"));   // false
