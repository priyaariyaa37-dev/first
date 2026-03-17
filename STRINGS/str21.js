//using splice and split
function insertWord(sentence, word, position) {
    let words = sentence.split(" ");   // Convert sentence to array
    words.splice(position, 0, word);  // Insert word at given index
    return words.join(" ");           // Convert back to sentence
}
console.log(insertWord("I love JavaScript", "really", 1));

//using slice
function insertWord(sentence, word, position) {
    let words = sentence.split(" ");
    
    let firstPart = words.slice(0, position);
    let secondPart = words.slice(position);

    return [...firstPart, word, ...secondPart].join(" ");
}
console.log(insertWord("Learning is fun", "JavaScript", 1));
