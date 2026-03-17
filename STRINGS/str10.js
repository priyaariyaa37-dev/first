function longestWord(str) {
    let words = str.split(" ");  // split string into words
    let longest = "";            // to store the longest word
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];  // update if current word is longer
        }
    }
    return longest;
}
let input = "hello world how are you doing todayyyyy";
console.log("Longest word:", longestWord(input));
