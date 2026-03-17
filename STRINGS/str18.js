function reverseWords(sentence) {
    let words = sentence.split(" ");   // Split into words
    let reversed = words.reverse();    // Reverse order
    return reversed.join(" ");         // Join back to string
}

console.log(reverseWords("Hello world how are you"));
