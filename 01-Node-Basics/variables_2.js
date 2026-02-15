/* let, const & var
var : variable can be re-declared and updated. A global scope variable (Old version) before 2015.
let : variable cannot be re-declared but can be updated. A block scope variable
const : variable cannot be re-declared or updated. A block scope variable
*/
// Let variable
let fullName = "Naimul Rabby"
let age = 25
let totalPrice = 100.00

console.log(fullName)
console.log(age)

// Let doesn't give us error if variable is not define and output is undefine
let a;
console.log(a)

// const variable (fixed value)
// const require variable's value either give us error
const PI =  3.14;
const pgrmName = "JavaScript";

console.log(PI);
console.log(pgrmName)

// Block scope variable
{
    let a = 10
    console.log(a)
}
{
    let a = 20
    console.log(a)
}