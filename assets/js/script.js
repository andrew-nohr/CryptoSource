var cryptoCompareApiKey = "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";
var coinLayerApiKey = "badc6c35cf23ca80b1c1af4c8eda2e1d";

var newsColumns = document.getElementById("news-columns");
var dropdown = document.querySelector('.dropdown');

var getCryptoCompareDataBySymbol = function (symbol) {

    var cryptoCompareURL = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=" + symbol + "&api_key=" + cryptoCompareApiKey

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
<<<<<<< HEAD
            var coinValue = coinLayerData.rates
            return displayCoinLayerData(coinLayerData);
=======
                console.log(coinLayerData)
                displayCoinLayerData(coinLayerData);
                var coinValue = coinLayerData.rates
                console.log(coinValue)
>>>>>>> parent of 12fd651 (debugging, reverted to previous version)
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

<<<<<<< HEAD
    var dateAndTime = moment().format('MMMM Do YYYY, h:mm:ss a');   

=======
>>>>>>> parent of 12fd651 (debugging, reverted to previous version)
    //display date and time 
    var dateAndTime = moment().format('MMMM Do YYYY, h:mm:ss a');   
    $('.time-date').append(dateAndTime)

<<<<<<< HEAD

=======
>>>>>>> parent of 12fd651 (debugging, reverted to previous version)
    //display symbol
    $('.cryptoName').replace('*Selected Coin*', sym)
    $('.cryptoName').replace('*Coin Value*', coinValue)
}

var displayCryptoCompareData = function (cryptoCompareData) {

<<<<<<< HEAD
    //Clear any old news article cards
    while (newsColumns.firstChild) {
        newsColumns.removeChild(newsColumns.firstChild);
    }
=======
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
>>>>>>> parent of 12fd651 (debugging, reverted to previous version)

    // Create card elements for the first 3 news articles
    for (var i = 0; i < 3; i++) {

<<<<<<< HEAD
        // -------- Create the card elements --------
        var column = document.createElement("div");
        column.classList.add("column");
        column.classList.add("is-4");
        newsColumns.append(column);

        var card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("is-shady");
        column.append(card);

        // -------- Elements for card image --------
        var cardImageDiv = document.createElement("div");
        cardImageDiv.classList.add("card-image");
        card.append(cardImageDiv);

        var cardImageFigure = document.createElement("figure");
        cardImageFigure.classList.add("image");
        cardImageFigure.classList.add("is-4by3");
        cardImageDiv.append(cardImageFigure);

        //Set the image from the API call data
        var cardImage = document.createElement("img");
        cardImage.setAttribute("src", cryptoCompareData.Data[i].imageurl); 
        cardImageFigure.append(cardImage);

        // -------- Elements for card content --------
        var cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        card.append(cardContent);

        var content = document.createElement("div");
        content.classList.add("content");
        cardContent.append(content);

        //Set the card title from the API call data
        var cardTitle = document.createElement("h4");
        cardTitle.textContent = cryptoCompareData.Data[i].title;
        content.append(cardTitle);

        //Set the card description from the API call data
        var cardDescription = document.createElement("p");
        cardDescription.textContent = cryptoCompareData.Data[i].body;
        content.append(cardDescription);

        //Set the read button link target from the API call
        var readButton = document.createElement("a");
        readButton.setAttribute("href", cryptoCompareData.Data[i].url);
        readButton.setAttribute("target", "_blank");
        readButton.classList.add("button");
        readButton.classList.add("is-link");
        readButton.textContent = "Read";
        content.append(readButton);
    }
}

var displayCoinLayerData = function (coinLayerData) {
    console.log(coinLayerData)
}

var toggleDropdown = function (event){
    event.stopPropagation();
    dropdown.classList.toggle('is-active');

    if (event.target.className == "dropdown-item") {
        var selectedCoin = event.target.textContent;

        if (selectedCoin.includes("Bitcoin")) {
            var sym = 'BTC';
            getCryptoCompareDataBySymbol("BTC");
            getCoinLayerDataBySymbol("BTC");
        }if (selectedCoin.includes("Etherium")) {
            var sym = 'ETH';
            getCryptoCompareDataBySymbol("ETH");
            getCoinLayerDataBySymbol("ETH");
        }if (selectedCoin.includes("LiteCoin")) {
            var sym = 'LTC';
            getCryptoCompareDataBySymbol("LTC");
            getCoinLayerDataBySymbol("LTC");
        }if (selectedCoin.includes("Ripple")) {
            var sym = 'XRP';
            getCryptoCompareDataBySymbol("XRP");
            getCoinLayerDataBySymbol("XRP");
        }if (selectedCoin.includes("Cardano")) {
            var sym = 'ADA';
            getCryptoCompareDataBySymbol("ADA");
            getCoinLayerDataBySymbol("ADA");
        }if (selectedCoin.includes("Crypto.com Coin")) {
            var sym = 'CRO';
            getCryptoCompareDataBySymbol("CRO");
            getCoinLayerDataBySymbol("CRO");
        }
    }
}

dropdown.addEventListener('click', toggleDropdown);
=======
>>>>>>> parent of 12fd651 (debugging, reverted to previous version)
