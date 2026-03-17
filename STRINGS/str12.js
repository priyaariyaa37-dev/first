function countWords(sentence) 
{
    let words = sentence.trim().split(" ");  // Remove extra spaces & split by space
    return words.length;
}
console.log(countWords("Hello world how are you"));

