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
div.onmouseover = (evt) => {
    console.log("Event Object for Div...")
    console.log(evt);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log("Inside div")
}