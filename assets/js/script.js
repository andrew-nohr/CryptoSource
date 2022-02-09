<<<<<<< HEAD
var cryptoCompareApiKey = "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";
var coinLayerApiKey = "badc6c35cf23ca80b1c1af4c8eda2e1d";

var getCryptoCompareDataBySymbol = function (symbol) {

    var cryptoCompareURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=" + symbol + "&api_key=" + cryptoCompareApiKey
    console.log("Fetching: " + cryptoCompareURL);

    fetch(cryptoCompareURL)

        // Check if response is OK and if it is, load response as json
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject("API did not return an OK response.");
            }
        })

        // check if we recieved data back and if we did, display it to user
        .then(cryptoCompareData => {
            if (cryptoCompareData != "" && cryptoCompareData != null) {
                return displayCryptoCompareData(cryptoCompareData);
            }
        })

        // if we encounter errors above, this catch block will run
        .catch(function (error) {
            console.log(error);
        });
}

var getCoinLayerDataBySymbol = function (symbol) {

    var coinLayerURL = "http://api.coinlayer.com/api/live?access_key=" + coinLayerApiKey + "&Symbols=" + symbol
    
    console.log("Fetching: " + coinLayerURL);
    fetch(coinLayerURL)

        // Check if response is OK and if it is, load response as json
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject("API did not return an OK response.");
            }
        })

        // check if we recieved data back and if we did, display it to user
        .then(coinLayerData => {
            if (coinLayerData != "" && coinLayerData != null) {
                return displayCoinLayerData(coinLayerData);
            }
        })

        // if we encounter errors above, this catch block will run
        .catch(function (error) {
            console.log(error);
        });
}

var displayCryptoCompareData = function (cryptoCompareData) {
    console.log(cryptoCompareData)
}

var displayCoinLayerData = function (coinLayerData) {
    console.log(coinLayerData)

}

getCoinLayerDataBySymbol("BTC");
getCryptoCompareDataBySymbol("BTC")
=======
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
>>>>>>> SallyJava
