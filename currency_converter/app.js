const baseUrl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const inputs = document.querySelectorll(".input-div select");
const btn = document.querySelector('.form-btn');
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");
const msg = document.querySelector(".msg");
for(let select of inputs){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from"&&currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="To"&&currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
const updateFlag = ()=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;

};
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval===""|| amtval<1){
        amtval=1;
        amount.value="1";
    }
    const URL = `${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalamout = amtval*rate;
    msg.innerText = `${amtval} ${fromCurr.value} = ${finalamout} ${toCurr.value}`;

});