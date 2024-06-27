// console.log("arrays");//collection of same type of data we can make array with different data type but thst is not preffered.
// let marks = [95,89,69,73];
// console.log(marks);
// console.log(marks.length);
// let cars = ["audi","bmw","merc","toyota land cruiser","jeep compas"];
// console.log(cars);
// console.log(cars.length);
// console.log(typeof marks);


// console.log("array indices");
// console.log(marks[3]);
// console.log(marks[2]);
// marks[2]= 25;//arrays are mutable
// console.log(marks);


// console.log("Looping over an array");
// for(let index=0;index<marks.length;index++){
//     console.log(marks[index]);
// };
// // for(let i = 0;i<cars.length;i++){
// //     console.log(cars[i]);
// // }
// console.log("for of loop");

// for(let car of cars ){
//     console.log(car);
// }
// let cities = ["gurugram","delhi","mumbai","jaipur","pune","nagpur"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }
//  let stu_marks = [85,97,44,37,76,60];
// let sum = 0
// for(let mark of stu_marks){

//     sum = sum+mark

// }
// avg= sum/marks.length
// console.log("the average of marks is ",avg)

// let items = [250,645,300,900,50];
// let index = 0;
// for(let value of items){
//     let offer = value/10;
//     items[index] = items[index]-offer;
//     console.log(`value after offer = ${items[index]}`)
//     index++;
// }

console.log("array methods");
//push method // changes in the originalm array
let foodItems = ["chips","apple","litchi","mango","you"];
foodItems.push("tomato");
console.log(foodItems);

//pop method // changes in the original array

let deletedFooditem = foodItems.pop();
console.log(` the deleted food item is  ${deletedFooditem}`);//pop can change the original array and return the deleted item.
//tostring method.// it returns a new string and does not chnages the original array

let a =  (foodItems.toString());
console.log(a);
console.log(foodItems);

// concat method and returns the result as a new array
let  cars = ["hyundai","toyota","maruti"];
let drives = ["Bmw","Landcruiser","thar"];
let carArray = cars.concat(drives);
console.log(carArray);//it returns a new array and does not changes the original array.
console.log(cars);
console.log(drives);

// unshift method push  elements at the start of the array
// shift method deletes the first element from the array.
cars.unshift("Tata");
console.log(cars);
let val = carArray.shift();
console.log("deleted ",val);
// slice method doesnot change the original array and returns a poece of an array
//slice(startindex,endindex)
let slicedArray=cars.slice(0,2);//ending index not included.
console.log(slicedArray);
//splice method change original array(add,remove,replace)
//splice(startidx,delcount,newEl1...)
let b = [1,2,3,4,5,6,7,8];
b.splice(1,2,101,102);
console.log(b);








