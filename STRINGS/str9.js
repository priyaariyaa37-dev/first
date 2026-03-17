function replaceSpaceWithHyphen(str) {
    let result = "";  // start with empty string

    // go through each character in the input string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result= result + "-";  // replace space with hyphen
        } else {
            result= result + str[i];  // keep other characters as they are
        }
    }

    return result;  // return the final string
}

let input = "Hello World! Ravneet Kaur here.";
let output = replaceSpaceWithHyphen(input);

console.log(output);  
