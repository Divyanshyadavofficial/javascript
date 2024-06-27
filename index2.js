console.log("class 2 comeents operators and conditional statments");
//this is a single line comment 
/*this 
is 
a multiline comment */
console.log("arithmetic operators + , - , * ,/ ,% ,** ");
// let a = 2;
// let b = 5;
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b); 
// console.log("a * b = ",a*b); 
// console.log("a / b = ",a/b); 
// console.log("a % b = ",a%b);
// console.log("a ** b = ",a**b);
console.log("unary operators a++ , a-- , ++a , --a");
console.log("++a means first the increment is done on the value of then operation is performed");
console.log("a++ means first the operation is performed then the increment is done on the value of from next line");
let a = 5;
let b = 5;
console.log(++a);
console.log(a);
console.log(b++);
console.log(b);
console.log("assignment operators ==, += , -= , %= ,**");
console.log("comparison operators == , === equal to & type, != , !==");
console.log("logical operators &&,||,!");
console.log("conditional statments");
console.log("ternary operator condition? true output: false ouutput");
console.log("prompt, alert");
let num = prompt("enter a number ");
if(num%5==0){
    console.log(num,"is the multiple of 5");
} else{
    console.log(num,"is not a multiple of 5");
}
let scores = prompt("enter the score of the student between 0 to 100");
if(scores<0 && scores>100){
    prompt("re enter the score please")
}else if(scores>=80&&scores<=100){
        console.log("grade a")
}else if(scores>=70&&scores<=79){
        console.log("grade b");

}else if(scores>=60&&scores<=69){
        console.log("grade c");

}else if(scores>=50&&scores<=59){
        console.log("grade d");
}else if(scores<50){
        console.log("grade f");
}

