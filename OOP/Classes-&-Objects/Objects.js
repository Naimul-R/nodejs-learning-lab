// Creating an Objects --> 
const student = {
    fullName : "Naimul Rabby",
    marks : 94.55,
    printMarks : function () {
        console.log("Marks = ", this.marks); //studnet.marks
    },
};

// Now creating prototype --> 
const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
}

const KaranArjun = {
    salery : 50000,
};

const Aziz = {
    salary : 65000,
};

// Giving Unique tax rate for this employee -->
const Kobir = {
    salary : 80000,
    calcTax () {
        console.log("Tax rate us 20%");
    },
}

KaranArjun.__proto__ = employee;
Aziz.__proto__ = employee;
Kobir.__proto__ = employee;