let items = [250, 645, 300, 900, 50];

// solve using For-of loop
i = 0;
for (let val of items) {
    console.log(`value at item ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`the value after offer ${items[i]}`);
    i++;
}

console.log("\n---Solve Problem using For loop---");
// solve prob using for loop
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);