//this in regular and arrow 
function show() {
    console.log("Regular:", this);
};

const showArrow = () => {
    console.log("Arrow:", this);
};

show();       // Regular function
showArrow();  // Arrow function


