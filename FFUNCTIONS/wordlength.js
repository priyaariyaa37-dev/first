function countWords(sentence) 
{
    let words = sentence.trim().split(" ");
    return words.length;
}
console.log(countWords("JavaScript is fun"));

