function removeExtraSpaces(str) {
    return str.trim().replace(/\s+/g, " ");
}

console.log(removeExtraSpaces("  JavaScript    is    easy   "));
