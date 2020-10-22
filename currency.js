class Currency{

constructor(firstCurrency,secondCurrency){

this.firstCurrency = firstCurrency;
this.secondCurrency = secondCurrency;
this.url = "https://api.exchangeratesapi.io/latest?base=";
this.amount = null;



}


async exchange(){

const resolve = await fetch(this.url + this.firstCurrency);
const resolve2 = await resolve.json();
const data = await resolve2.rates[this.secondCurrency];
const total = await data * this.amount;
return total;




}




changeAmount(newAmount){
this.amount = newAmount;

}


changeFirstCurrency(newfirstCurrency){
    this.firstCurrency = newfirstCurrency;

}

changeSecondCurrency(newsecondCurrency){
 this.secondCurrency = new newsecondCurrency;
}
















}