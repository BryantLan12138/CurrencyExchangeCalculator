const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
let currency_one_amount = document.getElementById('amount-one');
let currency_two_amount = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');


//fetch exchange rate and update the DOM elements
function calculate() {
    //variables for the selected currency
    const current_currency_one = currency_one.value;
    const current_currency_two = currency_two.value;
    
    //leverage the third party API
    fetch(`https://api.exchangerate-api.com/v4/latest/${current_currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.rates[current_currency_two];
        // console.log(rates);
        //show the current exchange rate 
        rate.innerHTML = `1 ${current_currency_one} = ${rates} ${current_currency_two}`
        currency_two_amount.value = (currency_one_amount.value * rates).toFixed(2);
    })
};



//event listeners
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
currency_one_amount.addEventListener('input', calculate);
currency_two_amount.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const tmp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = tmp
    calculate();
})


calculate();












//test fetch API
// function calculate() {
//     fetch('item.json')
//     .then(res => res.json())
//     .then(data => document.body.innerHTML = data[0].text)
// }

// calculate();

