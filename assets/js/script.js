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
                console.log(coinLayerData)
                displayCoinLayerData(coinLayerData);
                var coinValue = coinLayerData.rates
                console.log(coinValue)
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

    //display date and time 
    var dateAndTime = moment().format('MMMM Do YYYY, h:mm:ss a');   
    $('.time-date').append(dateAndTime)

    //display symbol
    $('.cryptoName').replace('*Selected Coin*', sym)
    $('.cryptoName').replace('*Coin Value*', coinValue)
}


var toggleDropdown = function (event){
    event.stopPropagation();
    dropdown.classList.toggle('is-active');

    if (event.target.className == "dropdown-item") {
        var selectedCoin = event.target.textContent;

        if (selectedCoin.includes("Bitcoin")) {
            // var sym = 'BTC';
            getCryptoCompareDataBySymbol("BTC");
            getCoinLayerDataBySymbol("BTC");
        }if (selectedCoin.includes("Etherium")) {
            // var sym = 'ETH';
            getCryptoCompareDataBySymbol("ETH");
            getCoinLayerDataBySymbol("ETH");
        }if (selectedCoin.includes("LiteCoin")) {
            // var sym = 'LTC';
            getCryptoCompareDataBySymbol("LTC");
            getCoinLayerDataBySymbol("LTC");
        }if (selectedCoin.includes("Ripple")) {
            // var sym = 'XRP';
            getCryptoCompareDataBySymbol("XRP");
            getCoinLayerDataBySymbol("XRP");
        }if (selectedCoin.includes("Cardano")) {
            // var sym = 'ADA';
            getCryptoCompareDataBySymbol("ADA");
            getCoinLayerDataBySymbol("ADA");
        }if (selectedCoin.includes("Crypto.com Coin")) {
            // var sym = 'CRO';
            getCryptoCompareDataBySymbol("CRO");
            getCoinLayerDataBySymbol("CRO");
        }
    }
}


