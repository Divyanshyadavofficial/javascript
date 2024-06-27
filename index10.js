console.log("Fetch Api");
const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const button = document.querySelector("#button");


const getFacts = async()=>{
    console.log("getting data");
    let response = await fetch(URL);
    console.log(response);
    let data  = await response.json();
    console.log(data[0].text);
    factpara.innerText = data[0].text;
};
button.addEventListener("click",getFacts);