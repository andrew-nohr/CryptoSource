var cryptoCompareApiKey = "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";
var coinLayerApiKey = "badc6c35cf23ca80b1c1af4c8eda2e1d";

var newsColumns = document.getElementById("news-columns");

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

    //Clear any old news article cards
    while (newsColumns.firstChild) {
        newsColumns.removeChild(newsColumns.firstChild);
    }

    // Create card elements for the first 3 news articles
    for (var i = 0; i < 3; i++) {

        //Create the card elements
        var column = document.createElement("div");
        column.classList.add("column");
        column.classList.add("is-4");
        newsColumns.append(column);

        var card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("is-shady");
        column.append(card);

        //Elements for card image
        var cardImageDiv = document.createElement("div");
        cardImageDiv.classList.add("card-image");
        card.append(cardImageDiv);

        var cardImageFigure = document.createElement("figure");
        cardImageFigure.classList.add("image");
        cardImageFigure.classList.add("is-4by3");
        cardImageDiv.append(cardImageFigure);

        var cardImage = document.createElement("img");
        cardImage.setAttribute("src", "https://www.quoteinspector.com/media/bitcoin/crypto-ticker-candle-background-md.jpg");
        cardImageFigure.append(cardImage);

        //Elements for card content
        var cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        card.append(cardContent);

        var content = document.createElement("div");
        content.classList.add("content");
        cardContent.append(content);

        var cardTitle = document.createElement("h4");
        cardTitle.textContent = "This is a card title";
        content.append(cardTitle);

        var cardDescription = document.createElement("p");
        cardDescription.textContent = "This is the card text";
        content.append(cardDescription);

        var readButton = document.createElement("a");
        readButton.setAttribute("href", "http://www.google.com");
        readButton.setAttribute("target", "_blank");
        readButton.classList.add("button");
        readButton.classList.add("is-link");
        readButton.textContent = "Read";
        content.append(readButton);

    }


    //console.log(cryptoCompareData)
}

var displayCoinLayerData = function (coinLayerData) {
    console.log(coinLayerData)

}

//getCoinLayerDataBySymbol("BTC");
//getCryptoCompareDataBySymbol("BTC")