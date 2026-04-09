// DOM Manipulation -->

// Selecting with ID -->
let heading = document.getElementById("header");
console.dir(heading)

// Selecting with class -->
let headings = document.getElementsByClassName("heading2-class");
let para = document.getElementsByClassName("para-class")
console.log(para)
console.dir(headings);
console.log(headings);

// Selecting with tags -->
let parahs = document.getElementsByTagName("p");
console.log(parahs);

// Query Selector (myId, class, tag) -->
console.log("\nQuery Selector.")
let firstElement = document.querySelector("p"); // First element 
console.dir(firstElement);

//Query selector All (Notelist)
let allElement = document.querySelectorAll("p"); // All Element
console.dir(allElement);

// How to write class Query selector with dot(.)
let myClass = document.querySelector(".para-class");
console.dir(myClass);