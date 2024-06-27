console.log("objects in js");
//direct way of creating an object
const student = {
    fullName : "Divaynsh",
    marks: 79.4,
    printMarks: ()=>{
        console.log("marks", this.marks);
    },
};
//prototype is an entity having state and behaviour i.e properties
// and methods which is created once we create an object 
let arr = ["apple","mango","banana"];
console.log(typeof(arr));
//prototype creation.
const employee={
    calcTax1(){
        console.log("tax rate is 10%");
    },//definnig a funnction in an object.
};

const karan={
    salary : 50000,
    calcTax1(){
        console.log("tax is 20%");
    },
};
//__proto__ used to set a prototype
//we need to access the functions of employee object in karan
//object so in order to do this we set the prototype of karan
//object as employee class.
//the type of an prototype is a refrence to an object.
karan.__proto__=employee;
console.log(karan.calcTax1());
console.log(karan.calcTax1());
//if the same function is defined in the prototype and object
//then proiority is given to the function defined in the object.
console.log("classes in javascript");
//template for creating objects.
class ToyotaCar{
    constructor(company,mileage){
        console.log("creating new object");
        this.company = company;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;//the brand that is written with this
        //is a property of an object which is defined for all object
        //of that class and brand after equals to is a function argument.
    }
}

let fortuner = new ToyotaCar("toyota",10);
console.log(typeof(fortuner));
fortuner.setBrand("fortuner");
console.log(fortuner.start());
console.log(fortuner);


let lexus = new ToyotaCar("toyota",7);
lexus.setBrand("lexus");
console.log(lexus.start());
console.log(lexus);

console.log("constructor in js");
//it is a special method of a  class which is invoked automatically
//when a new object is created for that class. 
//if any class does not have constructor method defined then
//it is automatically created and called when a object is created.
console.log("inheritance in js");
class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent {

}
let obj = new child();
console.log(obj.hello());

class person {
    constructor(name){
        console.log("enter parent constructor");
        this.species = "homosapiens";
        this.name = name;

    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends person {
    constructor(branch,name){
        console.log("enter child constuctor");
        super(name);//to invoke parent class constructor.and
        //if we have to pass important information from child 
        //class to parent class the we use super keyword
        this.branch=branch;
        console.log("exit child constructor");
    }// if we have to define a constructoror use this in a child class 
    //then first we have to import the properties of parent 
    //class using super keyword. 
    work(){
        super.eat();// super keyword is used to call the methods
        //of parent class in child class.
        console.log("solve problems build something")
    }
}
let diy = new Engineer("chemical engineer","divyansh");
console.log(diy.eat());
// if we have same function defined in child and parent class 
//the the function of child class is invoked. method overriding.
console.log("super keyword");

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }
    viewData(){
        console.log("viewing website data");
    }
}
class Admin extends user{
    constructor(name,email){
        super(name,email);

    }
    editData(){
        console.log("editing website data");
    }
}

let AdminObj = new Admin("divyansh","yadavdivyansh445@gmail");
AdminObj.viewData();
AdminObj.editData();

let a= 5;
let b= 10;
console.log("a = ",a);
console.log("b = ", b);
console.log("a+b = ",a+b);

try{
    console.log("a+b = ",a+c);
}catch(err){
    console.log(err);

}
console.log("a-b =",a-b);
