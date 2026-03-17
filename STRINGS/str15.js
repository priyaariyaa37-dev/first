//remove vowels using regular space
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}
console.log(removeVowels("Riya Kaur"));

//using if else
    function removeVowels(str) 
{
    let result = "";
    for (let ch of str)
    {
        if ( ch !== "a" && ch !== "e" && ch !== "i" &&
             ch !== "o" && ch !== "u" &&
             ch !== "A" && ch !== "E" && ch !== "I" &&
             ch !== "O" && ch !== "U")
        {
            result += ch;
        }
    }
    return result;
}
console.log(removeVowels("Riya Kaur"));
