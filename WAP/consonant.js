const prompt = require('prompt-sync') ();
let character = prompt("Enter a character:").toLowerCase();
if(character >='a' && character <= 'z' && character.length === 1)
{
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u')
    {
        console.log("It is a vowel");
    }
    else
    {
        console.log("It is a consonant");
    }
}
else
{
    console.log("Invalid input");
}   