// Promises
let promise = new Promise((resolve, reject) => {
    console.log("I am your promuse");
    //resolve("success"); // resolve is a function.
    reject("rejected error!"); // also funcion 
})

function getData(getId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting Data ", getId);
            resolve("success");
            if (getNextData){
                getNextData();
            }
        }, 5000);
    });
}

// Promise's two methods
