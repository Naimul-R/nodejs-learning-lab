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

// Promise chain 
function asyncFunction1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
};

function asyncFunction2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
};

console.log("Fetching data1.....");
let p1 = asyncFunction1();
p1.then((res) => {
    console.log(res);
});

console.log("Fetching data2.....");
let p2 = asyncFunction2();
p2.then((res) => {
    console.log(res);
});