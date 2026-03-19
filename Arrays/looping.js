/* Looping over an array --> print all elements of an array.
    loop --> iterable (string, object, arrays),
*/

// 1st - For loop --> using property -length.
let heros = ["Ironman", "Batman", "Spiderman", "Thor", "Hulk", "Dr.Srtange"];

for (let i=0; i<heros.length; i++) {
    console.log(heros[i])
};

console.log("\n---- For of ----");

// 2nd - For of
for (let hero of heros) {
    console.log(hero)
};

// Example
console.log("\n==== Example ====");
cites = ["Dhaka", "Mymenshingh", "Chittagoan", "Cumilla", "Rajshahi"];

for (let city of cites) {
    console.log(city.toUpperCase());
}