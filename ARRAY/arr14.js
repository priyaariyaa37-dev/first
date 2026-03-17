//find longest word in a string of array
function findLongestWord(arr) 
{
    return arr.reduce(function(longest, current) {
        return current.length > longest.length ? current : longest;
    });            //longest=>apple   current=>banana
}
var words = ["apple", "banana", "kiwi", "strawberry"];         
console.log(findLongestWord(words));


