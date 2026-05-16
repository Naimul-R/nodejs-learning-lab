// Creating a Class -->
class ToyotaCar {
    // Create constructor
    constructor () {
        console.log("Creating new object.");
    }

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
let Fortuner = new ToyotaCar(); // Invoke constructor
Fortuner.setBrand ("Fortuner");
console.log(Fortuner);

let lexus = new ToyotaCar(); // Invoke construtor
lexus.setBrand("lexus");
console.log(lexus);


// Another way to invoke or initialize constructor
class RollsRoyce {
    constructor (brand, mileage) {
        console.log("Royality with Rolls Royes");
        this.brand = brand;
        this.mileage = mileage;
    }

    model () {
        console.log("Rolls-Royce Cullinan (SUV)");
    }
};

let Cullinan = new RollsRoyce("Rolls-Royce", 10);
console.log(Cullinan);

// Inheritance -->
class Person {
    constructor () {
        this.species = "Homo Sapiens";
    }
    eat () {
        console.log("eat");
    }
    sleep () {
        console.log("sleep");
    }
    work () {
        console.log("do nothing!!");
    }
}

// Using Super keyword for create Child's constractor and also inherit Parent's constractor
class Enginner extends Person {
    constructor (branch) {
        super(); // To invoke parent class constractor
        this.branch = branch;
    }
    work () {
        super.eat();
        console.log("Solve problem, build somethings");
    }
}

class Doctor extends Person {
    work () {
        console.log("treat patients");
    }
}

let Naimul = new Enginner();
let Mahi = new Enginner("Chemical Enginner.")
let Mehadi = new Doctor();