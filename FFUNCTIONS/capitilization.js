function capitalizeWords(sentence) {
    let abc = sentence.split(" ");   // Break sentence into words
    let newSentence = "";              // Store final result

    for (let word of abc) {
        let firstLetter = word[0].toUpperCase();  // Capitalize first letter
        let remainingLetters = word.slice(1);     // बाकी letters

        newSentence += firstLetter + remainingLetters + " ";
    }

    return newSentence.trim();  // Remove extra space at end
}

console.log(capitalizeWords("hello world how are you all"));

