function checkStartEnd(str) {
    if (str.length === 0) return false;

    let first = str.charAt(0);
    let last = str.charAt(str.length - 1);

    return first === last;
}

console.log(checkStartEnd("madam"));  // true
