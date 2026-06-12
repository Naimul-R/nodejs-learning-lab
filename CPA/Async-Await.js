// Async Function is better than Promise or promise chain 
function api () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 2000);
    })
}

async function getWeatherData() {
    await api(); // 1st 
    await api(); // 2nd 
}

// Example 
function getData(dataId, getNextData) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success");
        }, 3000);
    });
};

// Async await 
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}