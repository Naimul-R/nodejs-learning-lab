// Arrays in JS --> Array's methods.

// Push() --> Add to end 
let books = ["Mindset", "The Secret", "Ikigai", "Think and grow rich"];
let points = [90, 80, 85, 96];

books.push("Dark Phycology","The Alchemist");
console.log(books);

// pop() --> Delete from end & return 
let deletedItem = books.pop();
console.log("Deleted Item is ", deletedItem);

// toString() --> To convert array to string
console.log("This is strings", books.toString());