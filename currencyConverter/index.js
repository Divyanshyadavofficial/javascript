const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const getData = async()=>{
    let response = await fetch(URL);
    console.log(response);
}
getData()