console.log("events in js");
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
//     console.log("btn1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }

// js handling has higher priority then inline handleing.


// btn1.addEventListener("click",(evt)=>{
//     console.log("button 1 was clicked handler 1");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// })
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked handler-2");
// })

// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked handler-4");
// })
// btn1.removeEventListener("click",()=>{
//     console.log("button 1 was clicked handler-3");
// })

// const handler3 = ()=>{
//     console.log("button 1 was clicked handler-3")
// }
// btn1.addEventListener("click",handler3);
// btn1.removeEventListener("click",handler3);
let newBtn = document.createElement("button");
newBtn.innerText = "clickme!";
let para = document.createElement("p");
para.innerText = "this is a paragraph";

let b = document.querySelector("body");
b.prepend(newBtn);
b.append(para);
modeBtn =  document.querySelector("button");
let currMode = "light";
modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        b.style.backgroundColor = "black";
        b.style.color = "white";
    }else{
        currMode = "light";
       b.style.backgroundColor = "white";
       b.style.color = "black";
    }

    console.log(currMode);

});

