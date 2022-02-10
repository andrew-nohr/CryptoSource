var cryptoCompareApiKey = "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";
var coinLayerApiKey = "adf0c97a6bc7712feea1fc05da4edb58";

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
            displayCoinLayerData(coinLayerData);
            }
        })

        // if we encounter errors above, this catch block will run
        .catch(function (error) {
            console.log(error);
        });
}

//Displaying 
var displayCryptoCompareData = function (cryptoCompareData) {
    console.log(cryptoCompareData)
}

var displayCoinLayerData = function (coinLayerData) {
    console.log(coinLayerData)
    //Clear out old display

    //display date and time 
        var dateAndTime = moment().format('MMMM Do YYYY, h:mm:ss a');   
        $('.time-date').append('As of       ' + dateAndTime)
    //display coin value 
        var coinName = Object.keys(coinLayerData.rates)
        console.log(coinName)
        var coinValue = Object.values(coinLayerData.rates)
        console.log(coinValue)
        $('.cryptoName').replaceWith('Trading value of  ' + coinName +  '   is  $   ' + coinValue)
    }
    

// responding to clicking on each drop down items
function BTC() {
 //fetch 
 getCryptoCompareDataBySymbol('BTC');
 getCoinLayerDataBySymbol('BTC');
}

function ETH() {
    //fetch 
    getCryptoCompareDataBySymbol('ETH');
    getCoinLayerDataBySymbol('ETH');
}
function LTC() {
    //fetch 
    getCryptoCompareDataBySymbol('LTC');
    getCoinLayerDataBySymbol('LTC');
}

function XRP() {
    //fetch 
    getCryptoCompareDataBySymbol('XRP');
    getCoinLayerDataBySymbol('XRP');
}

function ADA() {
    //fetch 
    getCryptoCompareDataBySymbol('ADA');
    getCoinLayerDataBySymbol('ADA');
}

function CRO() {
    //fetch 
    getCryptoCompareDataBySymbol('CRO');
    getCoinLayerDataBySymbol('CRO');
}

   




