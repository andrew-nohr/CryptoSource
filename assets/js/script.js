var symbol = document.querySelector('a').textContent;
console.log(symbol)


var cryptoCompareApiKey = "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";

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

var getCoinCapDataBySymbol = function (symbol) {

    var coinCapAssetsURL = "https://api.coincap.io/v2/assets/" + symbol
    //CoinCap documentation reccomends to use these options: https://docs.coincap.io/#d4bac290-230a-48c6-a8eb-6804b2d137f3
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    console.log("Fetching: " + coinCapAssetsURL);
    fetch(coinCapAssetsURL, requestOptions)

        // Check if response is OK and if it is, load response as json
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject("API did not return an OK response.");
            }
        })

        // check if we recieved data back and if we did, display it to user
        .then(coinCapData => {
            if (coinCapData != "" && coinCapData != null) {
                return displayCoinCapData(coinCapData);
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

var displayCoinCapData = function (coinCapData) {
    console.log(
        "Current Crypto Data: " +
        "\nName: " + coinCapData.data.name +
        "\nSupply: " + coinCapData.data.supply + " " +
        "\nMarket Cap: " + coinCapData.data.marketCapUsd + " " +
        "\nPrice: " + coinCapData.data.priceUsd + " " +
        "\n% Change in last 24 hours: " + coinCapData.data.changePercent24Hr +
        "\n\n")

}

getCoinCapDataBySymbol("bitcoin");
getCryptoCompareDataBySymbol("BTC")