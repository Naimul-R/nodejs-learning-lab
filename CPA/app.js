// Synchronous 
console.log("Synchronise maintain sequence of the code");
console.log("One");
console.log("Two");
console.log("Three");

// Asynchronous 
console.log("Asynchronous skips delay code and run next code");

setTimeout(() => {
    console.log("Hello World");
 }, 4000); //timeout ; 2s = 2000ms

// CallBacks
function sum(a, b){
    console.log(a + b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(5, 5, sum); // Callbacks

// Another examples of callbacks 
function pizzaReady() {
    console.log("Your pizza is successfully ready.");
}
function orderPizza(callWhenReady){
    console.log("Making your pizza....");
    callWhenReady() // pizza is done, now "call" you
}

orderPizza(pizzaReady);

// Callbacks HEll (This is the bad form of cdoe to write)
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 3000);
}

getData(1, () => {
    console.log("Getting Data2....");
    getData(2, () => {
        console.log("Getting data3....");
        getData(3, () =>{
            console.log("Getting data4....");
            getData(4);
        });
    });
});
// NOTE : Callback hell is bad way to write code --> for that Promises is better way to solve this problem.

// Solution to the Callback Hell using Promise Chain
function getData(dataId, getNextData) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success");
            if (getNextData) {
                getNextData();
            };
        }, 5000);
    });
};

let p1 = getData();
p1.then()