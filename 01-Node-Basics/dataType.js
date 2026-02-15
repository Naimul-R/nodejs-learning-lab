/* DataType ---> Two Types of data --> 1. primitive 2. Non Primitive
1 - Primitive (7) data type
2 - Non Primitive (objects)
$ To check dataType --> typeof variableName
*/

// 7 Primitive DataType
// 1 - Number
let age = 25;
let price = 100.00;

// 2 - String
let fullName = "Tony Stark";

// 3 - Boolen
isFollow = true;

// 4 - Undefined
let x;
console.log(x)

// Null
let y = null
console.log(y)

// BigInt 
let num = BigInt("12345");

// Symbol
let sym = Symbol("Hello!");
console.log(sym)

// Non Primitive is collection of Value like, --> arry, function
// In Object store -- Key, value pair 
const student = {
    fullName : "Naimul Islam Rabby",
    age : 25,
    cgpa : 3.80,
    isPass : true
};
// How to update or rewrite value 
student["age"] = student["age"] + 1
//right way to get output
console.log(student);
console.log(student.fullName);
console.log(student["age"]);