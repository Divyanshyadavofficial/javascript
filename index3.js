// console.log("loops and strings");
// console.log("for loop");
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// for(let count = 1 ; count<=5; count++){
//     console.log("Divyansh");//5 times execute
// }
// console.log("loop has ended");

//  calculate sum of 1 to 5;


// let sum = 0;
// for(let i=1; i<=5;i++){
//     sum =  sum+i;
// }
// console.log("sum = ",sum);



// for(let i=1;i<=5;i++){//i is only defined for this block scope
//     console.log(i);
// }

// // console.log(i); this will display error

// console.log("while loop in js");
// let i = 0;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// console.log("Do while loop in js");
// let i =1;
// do{
//     console.log(i);
//     i++;


// }while(i<=5);

// console.log("For-of loop");
// let str = "Divyansh";
// let size = 0;
// for(let i of str){// this i stores the values of the string from starting index to end index
//     console.log(i);
//     size++;
// }// no initialistion no stopping condition no increment is specified they are done automatically
// console.log("string size = ", size);

// console.log("for-in loop");
// let student ={
//     name: "Divyansh",
//     age:21,
//     cgpa: 9.0,
//     ispass: true,
// };
// for (let key in student){
//     console.log("key =", key, "value =",student[key]);
// }

//prac 1

// for(i = 0 ; i<=100;i++){
//     if(i%2===0){
//         console.log(i)
//     };
// };

//prac 2

// let gameNum = 25;
// let userNum = prompt("enter the game NO");
// while(userNum != gameNum){
//    userNum = prompt("you entered wrong no enter the game no");
// }
// console.log("you entered the right no");

// console.log("Strings in javascript");
//  let str1 = "divyansh";
//  let str2 = "yadav";
//  console.log(str1);
//  console.log(str2);
//  console.log(str1.length);
//  console.log(str2.length);
//  console.log(str1[0]);
// console.log("template literals");
// let specialString = `this is a template literal`;
// console.log(typeof specialString);
// console.log(specialString);
// let obj = {
//     name : "divyansh",
//     class : "1",
// };
// let  details = `${obj.name} is a student of class ${obj.class}`;//string interpolation adding of variables and expression as a placeholder in strings.
// console.log(details);
// //escape characters \n for tab space use \t 
// let str = "harsh\nyadav";
// let str2 = "harsh\tyadav";
// console.log(str.length);
// console.log(str2.length);

// console.log("string methods");
// let str = "Divyanshyadav";//strins is a immutable data type in javascript and any changes made in the strings are treated as a new string and the old one remains same. 
// new_str = str.toUpperCase();
// console.log(new_str);
// new_str1 = str.toLowerCase();
// console.log(new_str1);
// console.log(str);
// let str2 = "   Div h1   "
// console.log(str2.trim());

// let sliced =  str.slice(0,5);//the ending index is not inclusive.
// console.log(sliced);
// let concated_strings = str.concat(str2);
// console.log(concated_strings);
// let replaced = str2.replace(" ","hi");//this replaces the first occurence of the value to be replaced to change all the occurences we have replaceAll function. 
// console.log(replaced);
// console.log(str.charAt(0));
// fullName = prompt("enter your full name");
// let userName = "@" + fullName  + fullName.length;
// console.log("your username is " ,userName);
