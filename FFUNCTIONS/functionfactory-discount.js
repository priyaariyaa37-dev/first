function discount(percent) {
    return function (price) {
        return price - price * percent / 100;
    };
}

let d10 = discount(10);

console.log(d10(100)); // 90
