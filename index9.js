console.log("callback promises and async await");
//synchronous programming.
console.log("one");
console.log("two");

console.log("asynchronous programming");
//asynchronous programming.
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
},2000);// this is a callback funcrtion that is defined the 
//set timeout function.
console.log("three");
console.log("four");//in this these consolelog statments do not
// wait for the set time function to execute they will execute
//as it is after 2 seconds hello is printed ex of asynchronous programming.
// it runs parallely. and doesnt block the flow.
console.log("callback functions");
const sum = (a,b)=>{
    console.log(a+b);
}
const calc = (a,b,sumcallback)=>{
    sumcallback(a,b);
}

calc(1,2,sum);//the callback function is not passed with 
//parenthesis.in the function call the function can aldo be defined
//as a call back function.

// console.log("callback hell nesting of callbacks");

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
    
        },2000);
    })

}
// getData(1,()=>{
//     console.log("geeting data 2");
//     getData(2,()=>{
//         console.log("getting data 3");
//         getData(3,()=>{
//             console.log("getting data 4");
//             getData(4);
//         });
//     });//when we have to pass a callback function with'
//     //arguments then we have to define a function for it.
// });//this is a condition of call back hell.to solve 
//this problem of call back hell we use promises.
console.log("promises");


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
        //reject("network error");
        
    });
};
let promise = getPromise();
promise.then((res)=>{
    console.log("promise fullfilled",res);
});

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// console.log(promise);

// function gettingData(dId,gettingNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dId);
//             resolve("success");
//             if(gettingNextData){
//                 gettingNextData();
//             }
//         },5000);
//     });
// }
// let result = gettingData(1);
// console.log(result);
console.log("promise chaining");
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },4000);
    });
}


console.log("fetching data 1");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("fetching data 2");
    asyncFunc2().then((res)=>{});
});

 getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    console.log(res);
});
console.log("async await in js");

// async function always returns a promise
// await pauses the execution of its surrounding async function
//until the promise is settled.
function  api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
(async function(){
    await api();
    await api();
})();

console.log("IIFE");

