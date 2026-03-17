function compareStrings(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(compareStrings("Hello", "hello"));   // true
console.log(compareStrings("Java", "JAVA"));     // true
console.log(compareStrings("Hi", "Hello"));      // false
