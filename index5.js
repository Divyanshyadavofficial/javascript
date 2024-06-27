// console.log("Functions in js");
// function sum(x,y){//functions pararmeters are local scope that is they are defined only in function blocks.
//     s = x+y;
//     return s;    
// }
// let val =sum(3,4);
// console.log(val);

// console.log("arrow functions");
// const multiply = (x,y)=>{
//     return x*y;

// }
// let mul = multiply(3,4);
// console.log(mul);

// function noOfVowels(a){
//     let count =0;
//     for(const char of a){
//         if(char ==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
//             count++;
//         }

//     }
//     console.log(count);
//     return count;

// }
// noOfVowels("abc");
// const ArrownoOfVowels =(a)=>{
//     let count =0;
//     for(const char of a){
//         if(char ==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
//             count++;
//         }

//     }
//     console.log(count);
//     return count;

// }
// // ArrownoOfVowels("qwertyuiop");
// console.log("For each loop in arrays");
// /* arr.forEach(callBackFunction)
// CallBackFunction here it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function.
// higher order functions are the function which contains 
// another function as their parameter or return another function as their parameter.*/
// let arr = ["dubai","afganisthan","London"];
// arr.forEach((val)=>{
//     console.log(val);

// });// the for each method has call backfunction
// //which can take 3 parameters such as value,index,
// //array itself.
// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });
// let arrNum=[1,2,3,4,5,6];
// arrNum.forEach((val,square)=>{
//     square = val*val;
//     console.log(square);
// });
// console.log("map method");
// //creates a new array with the results of 
// //some operation. the value its callback 
// //returns are used to form a new array
// //arr.map(callbackfn(value,index,array))
// arr1 = [1,2,3,4,5];
// newarr= arr1.map((val)=>{
//     if(val%2==0){
//         console.log("the num is even ",val);
//     };
//     return val%2==0;
// });
// console.log(newarr);
// console.log("filter Method");
// // Creates a new array of elements that give 
// //true for a condition the elements which 
// //satisfy the condition are stored in the 
// //new array.
// let newArr1=arr1.filter((val)=>{
//     return val%2==0;
// })
// console.log(newArr1);
// console.log("reduce method");
// //performs some operations & reduces the 
// //array into single value it returns that
// //single value.
// let arr2 = [1,2,,58,3,26,75];
// const sum =arr2.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(sum)
// const largest_ele = arr2.reduce((prev,curr)=>{
//     return prev>curr ? prev : curr;
// })
// console.log(largest_ele);
// let students_marks = [87,88,45,89,91,97,99];
// let marks_above_90 = students_marks.filter((val,idx)=>{
//     return(idx,val>=90);
// });
// console.log(marks_above_90);
let n = prompt("enter a number");
let arr = [];
for(i=1;i<=n;i++){
    arr[i-1] =i;

}
console.log(arr);