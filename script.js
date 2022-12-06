const firstAmount =document.getElementById("amount-one");
const secondAmount =document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swapBtn = document.getElementById("swap");


eventListeners();
const currency = new Currency();

function eventListeners(){
    firstCurrency.addEventListener("change",exchangeRates);
    secondCurrency.addEventListener("change",exchangeRates);
    firstAmount.addEventListener("input",exchangeRates);
    secondAmount.addEventListener("change",exchangeRates);

    swapBtn.addEventListener("click",swapTheCurreny);
}

function exchangeRates(){
    const secondCurrencyValue = secondCurrency.value;
    const firstCurrencyValue = firstCurrency.value;

    currency.getCurrencyData()
    .then(data => {
        const rate = data.rates[secondCurrencyValue];
        rateEl.innerText = `1 ${firstCurrencyValue} = ${rate} ${secondCurrencyValue}`

        secondAmount.value = (firstAmount.value * rate).toFixed(2);
    })
    .catch(err=> console.error(err));

}

function swapTheCurreny(){
    let temp = firstCurrency.value;
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = temp;
    exchangeRates();
}