// Creating a Class -->
class ToyotaCar {
    start () {
        console.log("Start");
    }

    stop () {
        console.log("Stop");
    }

    // Create Variable 
    setBrand(brand) {
        this.brand = brand;
    } 
}

// Creating object through class (ToyotaCar)
let Fortuner = new ToyotaCar();
Fortuner.setBrand ("Fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("lexus");