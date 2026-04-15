// JS Event handaling -->
let btn1 = document.querySelector("#btn1");

btn1.onclick = (Event) => {
    // Event Object
    console.log(Event)
    console.log("\nEvent Type")
    console.log(Event.type)

    //Event Handling 
    console.log("Button 1 is clicked!");
    let a = 25;
    a++
    console.log(a);
}

div = document.querySelector("div");

box.onmouseover = () => {
    console.log("Inside div")
}