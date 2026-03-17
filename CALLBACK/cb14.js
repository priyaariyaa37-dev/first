//access array elements safely and catch ArrayIndexOutOfBounds.
function getElement(arr, index) {
  try {
    if (index < 0 || index >= arr.length) {
      throw "ArrayIndexOutOfBounds";
    }
    console.log("Element:", arr[index]);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}
let arr = [10, 20, 30, 40];
getElement(arr, 2);  // valid
getElement(arr, 5);  // invalid