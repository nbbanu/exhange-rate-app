const firstCurrency = document.getElementById("currency-one");
const secondCurrency = document.getElementById("currency-two");

class Currency{
    
    async getCurrencyData(){
       
        let firstCurrencyValue = firstCurrency.value;
        const responseObj = await fetch(`https://api.exchangerate.host/latest?base=${firstCurrencyValue}`);
   
        const jsonObj = await responseObj.json();
        return jsonObj;
    }
}