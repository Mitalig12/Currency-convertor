const currencyfirstEl = document.getElementById("currency-first");
const valuefirstEl = document.getElementById("value-first");
const currencysecondEl = document.getElementById("currency-second");
const valuesecondEl = document.getElementById("value-second");
const exchangerateEl = document.getElementById("exchange-rate");

updateRate()

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/591264e2accb1950e00a51fe/latest/${currencyfirstEl.value}`)
    .then((res)=>res.json())
    .then((data)=> {const rate = data.conversion_rates[currencysecondEl.value]
    console.log(rate);
    exchangerateEl.innerText = `1 ${currencyfirstEl.value} = ${rate + " " +currencysecondEl.value}`
    valuesecondEl.value = (valuefirstEl.value * rate).toFixed(3)});
}

currencyfirstEl.addEventListener("change", updateRate)
currencysecondEl.addEventListener("change", updateRate)
valuefirstEl.addEventListener("input", updateRate)
