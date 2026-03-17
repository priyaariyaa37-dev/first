function truncateString(str, limit)
{
    if (str.length > limit) 
    {
        return str.slice(0, limit) + "....";
    }
    return str;   // If string is shorter than limit
}
console.log(truncateString("JavaScript is very easy to learn", 10));
