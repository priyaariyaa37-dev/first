// Creating strings
let str1 = "Hello JavaScript";
let str2 = "World";
let str3 = "Hello";

// 1. Length
console.log("Length:",str1.length);

// 2. Access characters
console.log("First character:", str1[0]);
console.log("Character at index 6:", str1.charAt(6));

// 3. Concatenation
console.log("Concatenation (+):", str3 + " " + str2);
console.log("Concatenation (concat):", str3.concat(" ", str2));

// 4. Case conversion
console.log("Uppercase:", str1.toUpperCase());
console.log("Lowercase:", str1.toLowerCase());

// 5. Trimming spaces
console.log("Trim:", str1.trim());
console.log("Trim Start:", str1.trimStart());
console.log("Trim End:", str1.trimEnd());

// 6. Finding strings
console.log("Includes 'Java':", str1.includes("Java"));
console.log("Index of 'Java':", str1.indexOf("Java"));
console.log("Last index of 'a':", str1.lastIndexOf("a"));

// 7. Extracting parts
let text = "JavaScript";
console.log("Slice (0,4):", text.slice(0, 4));
console.log("Substring (4,10):", text.substring(4, 10));
console.log("Substr (4,6):", text.substr(4, 6));

// 8. Replacing text
console.log("Replace:", str1.replace("Hello", "Hi"));

// 9. Splitting string
let languages = "HTML/CSS/JavaScript";
console.log("Split:", languages.split("/"));

// 10. Comparing strings
let a = "apple";
let b = "apple";
console.log("Comparison (===):", a === b);

// 11. StartsWith & EndsWith
let file = "index.html";
console.log("Starts with 'index':", file.startsWith("index"));
console.log("Ends with '.html':", file.endsWith(".html"));

// 12. Template literals
let name = "Riya";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);

// 13. Repeat string
console.log("Repeat:", str3.repeat(3));

// 14. String immutability example
let demo = "Hello";
demo[0] = "Y";   // This will NOT change the string
console.log("Immutable String:", demo);
