// Numbers
let a = 10;
let b = 3;

// 2. Math Object Methods
console.log("Math.PI:", Math.PI);

console.log("Round:", Math.round(4.6)); // 5
console.log("Floor:", Math.floor(4.9)); // 4
console.log("Ceil:", Math.ceil(4.1));   // 5
console.log("Truncate:", Math.trunc(4.9)); // 4

console.log("Absolute:", Math.abs(-25)); // 25

console.log("Power:", Math.pow(2, 3));   // 8
console.log("Square Root:", Math.sqrt(16)); // 4
console.log("Cube Root:", Math.cbrt(27));   // 3

// 3. Min and Max
console.log("Minimum:", Math.min(3, 7, 1, 9));
console.log("Maximum:", Math.max(3, 7, 1, 9));

// 4. Random Numbers
console.log("Random (0-1):", Math.random());
console.log("Random (1-10):", Math.floor(Math.random() * 10) + 1);

// 5. Trigonometric Functions (values in radians)
console.log("Sin(0):", Math.sin(0));
console.log("Cos(0):", Math.cos(0));
console.log("Tan(0):", Math.tan(0));

// 6. Logarithmic Functions
console.log("Log (base e):", Math.log(10));
console.log("Log10:", Math.log10(100));
console.log("Log2:", Math.log2(8));

// 7. Sign and Rounding Helpers
console.log("Sign of -5:", Math.sign(-5));
console.log("Sign of 0:", Math.sign(0));
console.log("Sign of 7:", Math.sign(7));

// 8. Constants
console.log("Euler's Number:", Math.E);
