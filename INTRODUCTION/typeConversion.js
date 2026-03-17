// JavaScript Type Conversions

// 1. String Conversions
console.log("=== String Conversions ===");
console.log(String(123));           // "123"
console.log(String(true));          // "true"
console.log(String(false));         // "false"
console.log(String(null));          // "null"
console.log(String(undefined));     // "undefined"
console.log(String([]));            // ""
console.log(String([1, 2, 3]));     // "1,2,3"
console.log(String({}));            // "[object Object]"

// 2. Number Conversions
console.log("\n=== Number Conversions ===");
console.log(Number("123"));         // 123
console.log(Number("123.45"));      // 123.45
console.log(Number(true));          // 1
console.log(Number(false));         // 0
console.log(Number(null));          // 0
console.log(Number(undefined));     // NaN
console.log(Number(""));            // 0
console.log(Number("hello"));       // NaN

// 3. Boolean Conversions
console.log("\n=== Boolean Conversions ===");
console.log(Boolean(1));            // true
console.log(Boolean(0));            // false
console.log(Boolean(""));           // false
console.log(Boolean("hello"));      // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true

// 4. Implicit Type Conversions
console.log("\n=== Implicit Type Conversions ===");
console.log("5" + 3);              // "53" (string concatenation)
console.log("5" - 3);              // 2 (numeric subtraction)
console.log("5" * "2");            // 10
console.log("10" / "2");           // 5
console.log("a" + 3);              // "a3" (string concatenation)
console.log("A" + 3);              // "A3" (string concatenation)        
console.log("A" + "A");              // "AA" (string concatenation)
console.log("5" > 3);              // true (string "5" is converted to number 5)
console.log("5" == 5);             // true (string "5" is converted to number 5)
console.log("5" === 5);            // false (no type conversion, different types)
console.log(true + true);         // 2 (true is converted to 1)
console.log(true + false);        // 1 (true is 1, false is 0)
console.log(true + 1);             // 2
console.log(false + 1);            // 1
console.log(null + 1);             // 1
console.log(undefined + 1);        // NaN       
console.log([] + []);             // "" (empty string)
console.log([] + {});             // "[object Object]"
console.log({} + []);             // 0 (empty object treated as 0)
console.log({} + {});             // NaN (object cannot be converted to number)
