//show that strings are immutable
let str = "Hello";
str[0] = "h";
console.log(str);

//string methods
let word="Hello World ";
console.log(word.length);
console.log(word.toUpperCase);
console.log(word.toLowerCase);
console.log(word.indexOf("o"));
console.log(word.slice(0,5));
console.log(word.replace("World","javascript"));
console.log(word.split(" "));
console.log(word.trim());
console.log(word.includes("Hello"));
console.log(word.startsWith("Hello"));
console.log(word.endsWith("World"));
console.log(word.charAt(0));
console.log(word.charCodeAt(0));
console.log(word.substring(0,5));
console.log(word.repeat(2));
console.log(word.concat("!!!"));
