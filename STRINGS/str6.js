function countOccurrence(str, target) 
{
    let count = 0;
    for (let ch of str) 
    {
        if (ch === target) 
        {
            count++;
        }
    }
    return count;
}
let text = "programming";
let character = "g";
console.log("Occurrence:", countOccurrence(text, character));
