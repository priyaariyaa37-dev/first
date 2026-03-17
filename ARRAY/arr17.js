//group numbers into even and odd using reduce()
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const result = arr.reduce(function(acc, num) {
    if (num % 2 === 0) {
        acc.even.push(num);
    } else {
        acc.odd.push(num);
    }
    return acc;
}, { even: [], odd: [] });

console.log(result);