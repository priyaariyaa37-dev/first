function sayWelcome() {
    console.log("Welcome to the class!");
}

function runTask(taskFunction) {
    taskFunction();   // execute the function received
}

runTask(sayWelcome);
