//convert a string to int and handle number format exception
function convertToInt(str) {
  try {
    let num = parseInt(str);
    if (isNaN(num)) {
      throw "NumberFormatException";
    }
    console.log("Integer:", num);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}
convertToInt("123");  
convertToInt("abc");  
