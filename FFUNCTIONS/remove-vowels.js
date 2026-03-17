//remove vowels from string
function rmv(str)
{
    let ans="";
    for (let ch of str)
    { 
        if(ch!=="a" && ch!=="e" && ch!=="i" && ch!=="o" && ch!=="u" && ch!=="A" && ch!=="E" && ch!=="I" && ch!=="O" && ch!=="U")
          {
             ans+=ch;  
          }
    }
    return(ans);
}
console.log(rmv("Ravneet Kaur"));
