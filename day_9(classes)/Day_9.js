const std = {
    Name : "Saad",
    CGPA: 3.7,
    PrintStudent: function () { //* use traditional functions inside objects as arrow don't work in them (without alteration)
        return this.Name + " " + this.CGPA; //* you cant use this in arrow function wtf
    }


    // * all objects have a prototype object in them if there is a name clash the user defined function will be executed.
    // * arrays also hav this bs(it's not bs it's wonderful actually you dumb idiot)
};
// std.Name = "SaadKhan";
console.log(std.PrintStudent());
// std.PrintStudent



const emp = {
    cal (tax) {
        console.log(`tax rate is crazy. it is ${tax}% currently`);
    },
    // both are correct above is simpler and preferred
    cal2: function (tax, sal) {
        console.log(`tax rate is crazy. it is ${tax}% currently`);
        tax /= 100;
        tax *= sal;
        sal -= tax
        console.log(sal);
    }
};


const saad = {
    Salary: 20000
}
const saad1 = {
    Salary: 20000
}
const saad2 = {
    Salary: 20000
}
const saad3 = {
    Salary: 20000
}
const saad4 = {
    Salary: 20000
}
saad.__proto__ = emp; // shit is insane should be after object declaration.
saad1.__proto__ = emp; // shit is insane should be after object declaration.
saad2.__proto__ = emp; // shit is insane should be after object declaration.
saad3.__proto__ = emp; // shit is insane should be after object declaration.
saad4.__proto__ = emp; // shit is insane should be after object declaration.

(saad.cal2(10.5, saad.Salary)); // shit is mental


// * Classes


class car{
    // do not need to create a empty constructor when there is a parameterized one
    // can not override constructors in same class.
    constructor(model, lice){
        this.model = model;
        this.lice = lice
        console.log("constructor called");
    }

    //  methods V ofc
    start() {
        console.log('car start');
    }
    stop() {
        console.log('car stop');
    }

    setModel(model) {
        this.model = model;
    }
    getModel() {
        return this.model;
    }
    setLice(lice) {
        this.lice = lice;
    }
    getLice() {
        return this.lice;
    }
}

const toyota = new car("Cultus"); // parameterized constructor
// toyota.setModel("Cultus");
console.log(toyota.getModel());


const suzuki = new car("Mehran", "LEQ 2198"); // parameterized constructor
// suzuki.setModel("Mehran");
console.log(suzuki.getModel());
console.log(suzuki.getLice());


const KIA = new car(); // parameterized constructor


// inheritance
// if child and parents have same methods then child's method wll be used.(overriding)
// [js does not have overloading interestingly]

class Animal {
    hello(){
        console.log("Generic Sound of Animal");
    }
}

class Dog extends Animal {
    hello(){
        console.log("woof!"); // method will override the method in parent class(Animal in this case)
    }
}
const animal = new Animal();
animal.hello();
const dog = new Dog();
dog.hello();


// another example;

class Person {
    hello(){
        console.log("Hello!");
    }
}
class Child extends Person {}
const per = new Person();
const child = new Child();
per.hello();
child.hello(); //inherited

// another example

// class Person2 {
//     eat(){
//         console.log("eat!");
//     }
//     sleep(){
//         console.log("sleep!");
//     }
// }
// class WebDev extends Person2 {
//     code() {
//         console.log("code!");
//     }
// }
// const per2 = new Person2();
// const me = new WebDev();
// me.code();
// me.eat();
// me.code();
// me.sleep();


// constructor
class Person2 {
    constructor(){
        console.log("cons");
    }
    eat(){
        console.log("eat!");
    }
    sleep(){
        console.log("sleep!");
    }
}
class WebDev extends Person2 {
    constructor(lang){
        super(); // but this invokes the parent constructor which is something i don't want and is counter productive
        // it is used to access parent class methods or constructors
        this.lang = lang
        console.log(lang);
    }
    code() {
        console.log("code!");
    }
}
const per2 = new Person2();
const me = new WebDev("JS"); 



// practice q 1
let data = "Hello Cutie"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    ViewData(){
        console.log(`DATA = ${data}`);
        // console.log(window)
    }
}

const u = new User("Muhammad Saad Khan", "ksaad5272@gmail.com");
u.ViewData();

class Admin extends User {
    // EditData(editName, editEmail){
    //     this.name = editName;
    //     this.email = editEmail;
    // }
    EditData(newData){
        data = newData;
    }
}
const a = new Admin("ADMIN", "admin@gmail.com");
a.EditData("SAD Cutie");
a.ViewData();
u.ViewData();


// *error handling
// using try, catch blocks
// when an error occur the lines after the faulty statement are not executed this allows them to execute and still gives the error msg.
let ad =10;
let bd = 20;
console.log(ad + bd);
try {
    console.log(ad + b); //error
} catch (err) {
    console.log(err);    
}
console.log(ad + bd);
console.log(ad + bd);
console.log(ad + bd);
console.log(ad + bd);