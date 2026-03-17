//callback hell
function stepl(callback) {
    setTimeout(() => {
console.log("Step 1 done");
 callback();
}, 1000);
}

function step2(callback) {
    setTimeout(() => {
console.log("Step 2 done");
 callback();
}, 1000);
}

function step3(callback) {
    setTimeout(() => {
console.log("Step 3 done");
 callback();
}, 1000);
}



