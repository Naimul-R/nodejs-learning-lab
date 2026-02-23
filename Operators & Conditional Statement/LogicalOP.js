/* Logical Operator --> Boolean Output 
    1 -Logical And --> &&
    2 -Logical Or --> ||
    3 -Logical not --> !
*/

// Logical And ---> 1-true if all operands are truthy 2-false if any operand is falsy
let a = 6;
let b = 5;

let cond1 = a > b; // true
let cond2 = a === 6; // true

console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 && cond2 =", a > b && a !== 6); // one condition false output will be false.

/* In JavaScript, the logical OR operator (||) is a logical disjunction operator that evaluates two or more expressions and returns:
    -true if at least one of the operands is truthy
    -false if all operands are falsy
*/
console.log("cond1 || cond2 =", a < b || a === 6); // One condtion is true. So, return True

/*In JavaScript, the Logical NOT operator (!) is a unary operator that inverts the truth value of its operand.
    -If the operand is truthy, ! returns false.
    -If the operand is falsy, ! returns true.
*/
console.log("!(6 > 5) =", !(6 > 5)); // Return oposite boolean value 