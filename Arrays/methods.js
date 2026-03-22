// Arrays in JS --> Array's methods

// Push() --> Add to end 
let books = ["Mindset", "The Secret", "Ikigai", "Think and grow rich"];
let points = [90, 80, 85, 96];

books.push("Dark Phycology","The Alchemist");
console.log(books);


// pop() --> Delete from end & return 
let deletedItem = books.pop();
console.log("Deleted Item is = ", deletedItem);


// toString() --> To convert array to string
console.log("Books are format in Strings = ", books.toString());


// concat() --> join multiple arrays and returns result.
let marvelHeros = ["Ironman", "Hulk", "Thor", "Spiderman", "Black Panther"];
let dcHeros = ["Batman", "Superman", "Joker"];

let heross = marvelHeros.concat(dcHeros);
console.log("Concat output is : ", heross);


// Here is the difference is Unshift is add array at the starting point & shift is the delete from the start.
// unshift() --> add to start. NOTE:(equievalant to the push methods.)
console.log("\n===== unshift & shift =====");
let items = ["Iron", "perfume", "watch", "laptop"];
items.unshift("Walet", "phone", "ticket");
console.log("Add items at the start point : ", items);


// shift() --> delete form start and return NOTE:(equievalant to the pop methods.)
let delItem = items.shift();
console.log("Item deleted from the starting point : ", delItem);
console.log(items);


// slice() --> returns a piece of the array : SYN = slice(startidx, endidx)
console.log("\n===== Slice & Splice =====");
let shortName = ["Naimul", "Mahi", "Ananto", "Adnan", "Hasib", "Aziz"];
console.log(shortName);
console.log("Slice Method output = ", shortName.slice(0, 3));

// splice() --> change original array (add, remove, replace) : SYN = splice(startidx, delCount, newEl1...).
console.log("\nSplice method.");
let newItem = ["book", "pen", "keyboard", "mouse", "mousepad", "earpot", "notebook", "eyeglass"];
newItem.splice(2, 3, "Ipad"); // startidx = Keyboard, delCount form idx 2 remove 3 items, and add new element on idx 2.
console.log("Splice final output is = ", newItem);
