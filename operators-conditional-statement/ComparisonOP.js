// Comparison Operator 
let a = 5;
let b = 10;

// comaprison the number is True or False
console.log("5 == 10:", a == b);

// Not equal comparison
console.log("5 != 10:", a != b);

/* Strict Equality (===) and (!==) --> Equal to & Data Type
    -Checks both value and type without performing type conversion.
    -Returns true only if both operands are exactly the same type and have the same value.
*/
let x = 4;
let y = "8"; // Strict is not compare with this this string ("8")

console.log("x === y", x === y);

// Strict not equal (!==)
console.log("x !== y", x !== y);

// Compare with greather and less than 
let i = 5;
let j = 2;

console.log("5 > 2:", i > j);
console.log("5 >= 2:", i >= j);
console.log("5 < 2:", i < j);
console.log("5 <= 2:", i <= j);