//find all pairs whoes sum = target value.
//using nested loop
const arr = [2, 4, 3, 5, 7, 8, 9];
const target = 7;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log(arr[i], arr[j]);
        }
    }
}

