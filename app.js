const amountElement = document.querySelector("#amount");
const firstCurrencySelectArea = document.querySelector("#firstCurrency");
const secondCurrencySelectArea = document.querySelector("#secondCurrency");
const outputFirst = document.querySelector("#outputFirst");
const outputSecond = document.querySelector("#outputSecond");
const outputResult = document.querySelector("#outputResult");


const currency = new Currency(firstCurrencySelectArea.options[firstCurrencySelectArea.selectedIndex].textContent, secondCurrencySelectArea.options[secondCurrencySelectArea.selectedIndex].textContent);

eventListeners();





function eventListeners() {

    amountElement.addEventListener("input", getAmount);
    firstCurrencySelectArea.addEventListener("change", getFirstCurrencySelect);
    secondCurrencySelectArea.addEventListener("change", getSecondCurrencySelect);

}



function getAmount() {

    const amount = amountElement.value;
    currency.changeAmount(amount);
    currency.exchange()
    .then(response => { outputResult.value = response});



}


function getFirstCurrencySelect() {

    const firstCurrency = firstCurrencySelectArea.options[firstCurrencySelectArea.selectedIndex].textContent;
    outputFirst.textContent = firstCurrency;
    currency.changeFirstCurrency(firstCurrency);








}

function getSecondCurrencySelect() {

    const secondCurrency = secondCurrencySelectArea.options[secondCurrencySelectArea.selectedIndex].textContent;
    currency.changeFirstCurrency(secondCurrency);
    outputSecond.textContent = secondCurrency;



}


