// var rawsymbol = document.querySelector('a').textContent.trim().split('-');
// var symbol = rawsymbol[0];
// console.log(symbol)


// Coinlayer, gives latest crypto rates for all available or a specific set of cryptocurrencies. 
function coinLayer(symbol){
    fetch('http://api.coinlayer.com/api/live?access_key=40b565543bfa215722cf41a447afab32')
        .then(response => response.json()) 
        .then(data => {
        console.log(data)    
    })
}

// News: cryptoCompare

var cryptoCompareApiKey = "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";

var getCryptoCompareDataBySymbol = function () {

    var cryptoCompareURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=" + 'btc' + "&api_key=" + cryptoCompareApiKey
    fetch(cryptoCompareURL)
        .then(response => response.json()) 
        .then(data => {
            console.log(data)    
    })
}

coinLayer ()
getCryptoCompareDataBySymbol()