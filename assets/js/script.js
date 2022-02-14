var cryptoCompareApiKey =
  "c3d24075ea2af90c9c9419267e59744738dc365a925003c0232e1ebef14a98b1";
var coinLayerApiKey = "adf0c97a6bc7712feea1fc05da4edb58";

var newsColumns = document.getElementById("news-columns");
var dropdown = document.querySelector(".dropdown");
var menuText = document.querySelector("#menuText");

var getCryptoCompareDataBySymbol = function (symbol) {
  var cryptoCompareURL =
    "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=" +
    symbol +
    "&api_key=" +
    cryptoCompareApiKey;

  fetch(cryptoCompareURL)
    // Check if response is OK and if it is, load response as json
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("API did not return an OK response.");
      }
    })

    // check if we recieved data back and if we did, display it to user
    .then((cryptoCompareData) => {
      if (cryptoCompareData != "" && cryptoCompareData != null) {
        cryptoCompareData.symbol = symbol; //adding symbol property to object
        return displayCryptoCompareData(cryptoCompareData);
      }
    })

    // if we encounter errors above, this catch block will run
    .catch(function (error) {
      console.log(error);
    });
};

var getCoinLayerDataBySymbol = function (symbol) {
  var coinLayerURL =
    "https//api.coinlayer.com/api/live?access_key=" +
    coinLayerApiKey +
    "&Symbols=" +
    symbol;

  console.log("Fetching: " + coinLayerURL);
  fetch(coinLayerURL)
    // Check if response is OK and if it is, load response as json
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("API did not return an OK response.");
      }
    })

    // check if we recieved data back and if we did, display it to user
    .then((coinLayerData) => {
      if (coinLayerData != "" && coinLayerData != null) {
        displayCoinLayerData(coinLayerData);
      }
    })

    // if we encounter errors above, this catch block will run
    .catch(function (error) {
      console.log(error);
    });
};

var displayCryptoCompareData = function (cryptoCompareData) {
  //Clear any old news article cards
  while (newsColumns.firstChild) {
    newsColumns.removeChild(newsColumns.firstChild);
  }
  console.log(cryptoCompareData);
  // Create card elements for the first 3 news articles
  for (var i = 0; i < 3; i++) {
    // -------- Create the card elements --------
    var column = document.createElement("div");
    column.classList.add("column");
    column.classList.add("is-4");
    newsColumns.append(column);

    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("is-shady");
    card.classList.add("article-container"); //set card height
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
    cardDescription.textContent = cleanString(cryptoCompareData.Data[i].body);
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
};

var displayCoinLayerData = function (coinLayerData) {
  console.log(coinLayerData);
  //display date and time
  var dateAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  $(".time-date").text("As of       " + dateAndTime);
  //display coin value
  var coinName = Object.keys(coinLayerData.rates);
  console.log(coinName);
  var coinValue = Object.values(coinLayerData.rates);
  console.log(coinValue);
  $(".cryptoName").text(
    "Trading value of  " + coinName + "   is  $   " + coinValue
  );
};

var toggleDropdown = function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("is-active");

  if (event.target.className == "dropdown-item") {
    var selectedCoin = event.target.textContent.trim(); //added trim to remove white space
    menuText.textContent = selectedCoin; //changes text in menuText class
    console.log(selectedCoin);
    if (selectedCoin.includes("Bitcoin")) {
      getCryptoCompareDataBySymbol("BTC");
    } else if (selectedCoin.includes("Etherium")) {
      getCryptoCompareDataBySymbol("ETH");
    } else if (selectedCoin.includes("LiteCoin")) {
      getCryptoCompareDataBySymbol("LTC");
    } else if (selectedCoin.includes("Ripple")) {
      getCryptoCompareDataBySymbol("XRP");
    } else if (selectedCoin.includes("Cardano")) {
      getCryptoCompareDataBySymbol("ADA");
    } else if (selectedCoin.includes("Crypto.com Coin")) {
      getCryptoCompareDataBySymbol("CRO");
    }
  }
};

// API sends back unicode character codes in the response string
// This neat function will convert the unicode characters back into the characters they represent
// https://stackoverflow.com/questions/30903627/replace-unicode-characters-with-characters-javascript
var cleanString = function (str) {
  return str.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
};

// responding to clicking on each drop down items
function BTC() {
  $(".time-date").empty()
  $(".cryptoName").empty()
  //fetch
  getCryptoCompareDataBySymbol("BTC");
  getCoinLayerDataBySymbol("BTC");
}

function ETH() {
  $(".time-date").empty()
  $(".cryptoName").empty()
  //fetch
  getCryptoCompareDataBySymbol("ETH");
  getCoinLayerDataBySymbol("ETH");
}
function LTC() {
  $(".time-date").empty()
  $(".cryptoName").empty()
  //fetch
  getCryptoCompareDataBySymbol("LTC");
  getCoinLayerDataBySymbol("LTC");
}

function XRP() {
  $(".time-date").empty()
  $(".cryptoName").empty()
  //fetch
  getCryptoCompareDataBySymbol("XRP");
  getCoinLayerDataBySymbol("XRP");
}

function ADA() {
  $(".time-date").empty()
  $(".cryptoName").empty()
  //fetch
  getCryptoCompareDataBySymbol("ADA");
  getCoinLayerDataBySymbol("ADA");
}

function CRO() {
  $(".time-date").empty()
  $(".cryptoName").empty()
  //fetch
  getCryptoCompareDataBySymbol("CRO");
  getCoinLayerDataBySymbol("CRO");
}

dropdown.addEventListener("click", toggleDropdown);
