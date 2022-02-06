symbols = ['BTC','ETH','LTC','XRP','ADA','CRO']

for (var i = 0; i < symbols.length ; i++) {
    function coinLayerFetch(){
        fetch('http://api.coinlayer.com/api/live?access_key=badc6c35cf23ca80b1c1af4c8eda2e1d&Symbols='+symbols[i])
            .then(response => response.json()) 
            .then(data => {
                console.log(data)})


        
// function displayData (symbol,price){
//     console.log(symbol,price)
    // var cryptoValue = document.getElementById('cryptoValue')
    // cryptoValue.appendChild(rate)    
}

coinLayerFetch()

// News: cryptoCompare

var cryptoCompareApiKey = "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";

var CryptoCompareData = function () {

    var cryptoCompareURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=" + symbols[i] + "&api_key=" + cryptoCompareApiKey
    fetch(cryptoCompareURL)
        .then(response => response.json()) 
        .then(data => {
            console.log(data)
        
        })
    }
CryptoCompareData()



// // Coinlayer, gives latest crypto rates for all available or a specific set of cryptocurrencies. 
// function coinLayerFetch(){
//     fetch('http://api.coinlayer.com/api/live?access_key=40b565543bfa215722cf41a447afab32&Symbols=BTC,ETH,LTC,XRP,ADA,CRO')
//         .then(response => response.json()) 
//         .then(data => {
//         console.log(data) 
//         var rate = data.rates
//         console.log(rate) 
//     })
//   }
// Append Coin Layer Data 

// var dropDownItems = document.getElementsByClassName('dropdown-item')
// for (var i = 0; i < dropDownItems.length ; i++) {
//     var rawSymbol = dropDownItems[i].textContent
//     rawSymbol = rawSymbol.trim().split('-')
//     var symbol = rawSymbol[0];
//     console.log(symbol)

//     var cryptoValue = document.getElementById('cryptoValue')
//     cryptoValue.appendChild(rate)
// }






}
