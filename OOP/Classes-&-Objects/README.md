# Object -->

## Prototypes in JS

- A JavaScript object is an entity having state and behavior (Properties and Methods)
- JS object have a special property called prototype
- We can set prototype using - - proto - -

> If Object and prototype have same methods, Object method will be used.

# Classes -->

- Class is a program-code template for creating object
- Those object will have some state (variables) & some behaviour (functions) inside it

### Example :

```
class MyClass {
    constructor () {...}
    myMethod () {...}
}

let myObj = new MyClass ();

```

## Constructor

> is a special methods

- Constructor automatically invoked by new
- initializes object

## Inheritance

- Inheritance is passing down properties & methods from parents class to child class

```
class parent {

}
class child EXTENDS parent {

}
```

> if child and parent have same methods, child's methods will be used [method overriding]

## Super Keywords

- The super keyword is used to call the constractor of its parents class to access the parents properties and methods

```
super(args) // call Parent's constractor

super.parentMethod(args)
```
