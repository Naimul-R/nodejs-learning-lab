// to change the text we use innerText Properties. --> Qs 12

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " From Apna Collage student."; // Concatenate

// Qs 13 
// The Noob way
let divs = document.querySelectorAll(".box");
/*divs[0].innerText = "New unique value 1";
divs[1].innerText = "New unique value 2";
divs[2].innerText = "New unique value 3"; */

// Another way using loop --> 
let idx = 1;
for (div of divs) {
    div.innerText = `New unique value ${idx}`;
    idx++;
}