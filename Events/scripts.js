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


div1 = document.querySelector("div");
div1.onmouseover = (evt) => {
    console.log("Event Object for Div...")
    console.log(evt);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    console.log("Inside div")
}

// Event Listener --> we use Event listener frequently rather those Evnets
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", (evt) => {
    // Event Object 
    console.log(evt);
    console.log(evt.type);

    console.log("Button2 was clicked! - Handler 1");
})
// we use same event for multiple work 
btn2.addEventListener("click", () => {
    console.log("Button2 was clicked! - Handler 2");
})
// Methods for remove handler 
const handler3 = () => {
    console.log("Button2 was clicked! - Handler 3");
}
btn2.addEventListener("click", handler3);
btn2.removeEventListener("click", handler3);

btn2.addEventListener("click", () => {
    console.log("Button2 was clicked! - Handler 4");
})