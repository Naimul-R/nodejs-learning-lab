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
const getPromise = () => {
    return new Promise((resole, reject) => {
        console.log("I am a promise.");
        //resole("success");
        reject("Network Error!!")
    });
};

let promise = getPromise();
promise.then((res) => { // .then - funciton of promise
    console.log("fulfilled", res);
});

promise.catch((err) => { // .catch - function of promise 
    console.log("Rejected - ", err);
});