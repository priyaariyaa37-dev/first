function countCharacters(str) {
    let count = 0;

    for (let ch of str) {
        count++;
    }

    return count;
}

let text = "Hello World";
console.log("Number of characters:", countCharacters(text));

