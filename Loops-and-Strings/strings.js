// String is a sequence of characters used to represent text

// Create strings
let str = "I love js";
let str2 = 'Its an amezing language';

// Inbuild properties 
str.length 

// String indicate ---> str/strName[position]
console.log(str[9]);

// Template Literals in JS --> A way to embedded expression in stings
let specialSting = `This is a Template literals`;
console.log(specialSting);

let obj = {
    item : "pen",
    price : 10,
};

// String interpolation ${expression}
let output = `The cost of ${obj.item} is ${obj.price} BDT`;
console.log(output);

// Template expression
let outputt = `This is a template literal ${10+40}`;
console.log(outputt)

// (\n) use for next line
// (\t) use for tab space