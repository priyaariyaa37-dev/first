function findDuplicates(str) 
{
    let duplicates = "";
    for (let i = 0; i < str.length; i++) 
    {
        for (let j = i + 1; j < str.length; j++) 
        {
            if (str[i] === str[j]) 
            {
                if (!duplicates.includes(str[i]))         // check if already added
                {
                    duplicates += str[i];
                }
            }
        }
    }
    return duplicates;
}
console.log(findDuplicates("programming"));
