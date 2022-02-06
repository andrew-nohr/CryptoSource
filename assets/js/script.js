// info from users 
document.getElementById("submit-button").addEventListener("click", symbol)


// Technical Analysis 
// Key: XFRBFLAUSZVF7LBAF7HOFQPZXZBQ5V66MJUOXKB5DVTC3TRV







//COINCAP 

//var coinCapApiKey = "077197b0-ec28-42d9-a263-4d69a7e393ea";

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