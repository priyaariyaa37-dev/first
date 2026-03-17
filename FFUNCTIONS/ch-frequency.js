function abc(str,a)
{
let count = 0;
 for (let ch of str)
 {
    if(ch===a)
    {
        count++;
    }
 }
 return count;
}
console.log(abc("I am Ravneet Kaur.Who are you?","a"));
