let DATA = "Secret Data";

class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data = ", DATA);
    }
}

class Admin extends User {
    editData() {
        DATA = "Some new value";
    }
}

// Creating object 
let student1 = new User("Naimul", "Naimul@gmail.com");
let student2 = new User("Minha", "Minha@gmail.com");