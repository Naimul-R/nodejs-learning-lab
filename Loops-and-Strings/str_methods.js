// String Methods --> These are build-in functions to manipulate a string
// Note: Strings are immutable (not changable) in JS

// str.toUpperCase() -->
let str1 = "ILoveYou!";
feelings = str1.toUpperCase();
console.log(feelings);

// str.toLowerCase()
let str2 = "ILoveYou";
feelingss = str2.toLowerCase();
console.log(feelingss);

// str.trim() --> remove white spaces
let str = "    I  Love JS  ";
console.log(str.trim());

// str.slice (start, end) --> returns part of string 
let str3 = "IamNaimul";
console.log(str3.slice(3, 7)); // Ender character are optional 

// str1.concat(str2) --> join str2 and st1 (concatinate)
let str4 = "I Love";
let str5 = " JS";
console.log(str4.concat(str5));

// str.replace(searchVal, newVal)
let str6 = "Hello! Yeer";
console.log(str6.replace("ee", "aa"));

// str.charAt(idx) --> for find out character using index
let str7 = "ILoveU";
console.log(str7.charAt(3));