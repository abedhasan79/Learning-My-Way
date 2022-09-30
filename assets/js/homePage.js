//asign
var searchBar = $("#bar");
var searchBtn = $("#searchButton");
var title = $("#title");
var imgContainer = $("#imgContainer");
var carouselControl = $("#carouselControl");
var recBtn = $("#recBtn");
var cardInput = $("#cardInput");
var recBtn1 = $("#recBtn1");
var cardInput1 = $("#cardInput1");
var recBtn2 = $("#recBtn2");
var cardInput2 = $("#cardInput2");

// api
//splash
var splashApiLink = "https://api.unsplash.com/search/photos/?query=";
var splashApiKey = "vhzjXLz3kbF0cpvBjxXkR3zMRbAB2eYwP7qI5kxHndQ";
var splashApiSecret = "aCQVXryiUwzsD6CuMJ-RjMNCmKNXB2zv6dmkLiW0-sc";

//function to start once button clicked
function searchLandmark(event) {
  event.preventDefault();
  //onclick hide the recommended lsit
  // $("#sectionHeaders").css('display','none');
  /////
  imgContainer.children().remove();
  
  var landmarkName = searchBar.val().trim();

  fetch(`${splashApiLink}${landmarkName}&per_page=5&client_id=${splashApiKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data.results;
      makeCarousel(results);
    });

  // getYoutube(landmarkName);
  $('figure').css('display','block');
  getWikipedia(landmarkName);
  //////////////
  //caliing local storage to save
  makeSearchList(landmarkName);
  createSearchList(landmarkName);
  saveSearchListInStorage(landmarkName);
}

function searchCard(event) {
  event.preventDefault();
  imgContainer.children().remove();
  // $("#sectionHeaders").css('display','none');
  var cardName = cardInput.text();
  console.log(cardName);

  fetch(`${splashApiLink}${cardName}&per_page=5&client_id=${splashApiKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data.results;
      makeCarousel(results);
    });

  // getYoutube(cardName);
  $('figure').css('display','block');
  getWikipedia(cardName);
}

function searchCard1(event) {
  event.preventDefault();
  imgContainer.children().remove();
  // $("#sectionHeaders").css('display','none');
  
  var cardName1 = cardInput1.text();
  console.log(cardName1);

  fetch(`${splashApiLink}${cardName1}&per_page=5&client_id=${splashApiKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data.results;
      makeCarousel(results);
    });

  // getYoutube(cardName1);
  $('figure').css('display','block');
  getWikipedia(cardName1);
}

function searchCard2(event) {
  event.preventDefault();
  imgContainer.children().remove();
  // $("#sectionHeaders").css('display','none');
  var cardName2 = cardInput2.text();
  console.log(cardName2);

  fetch(`${splashApiLink}${cardName2}&per_page=5&client_id=${splashApiKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data.results;
      makeCarousel(results);
    });

  // getYoutube(cardName2);
  $('figure').css('display','block');
  getWikipedia(cardName2);
}

//imput imgs into carousel
function makeCarousel(imgData) {
  console.log(imgData);
  for (i = 0; i < imgData.length; i++) {
    //header description
    var titleDiv = $("<div>");
    var titleInput = $("<h3>");
    var creditDiv = $("<div>");
    var creditInput = $("<h4>");
    var imgDiv = $("<div>");
    var imgInput = $("<img>");
    var imgLink = imgData[i].urls.full;
    titleInput.text(imgData[i].alt_description);
    creditInput.text("Photo by: " + imgData[i].user.name);
    titleDiv.append(titleInput);
    imgDiv.append(titleDiv);
    creditDiv.append(creditInput);
    imgDiv.append(creditDiv);
    //img input 1
    //stops overlap, if 1st pic make class active
    if (i === 0) {
      imgDiv.addClass("carousel-item active");
    } else {
      imgDiv.addClass("carousel-item");
    }
    imgInput.addClass("d-block w-100 images");
    imgInput.attr("src", imgLink);
    imgDiv.append(imgInput);
    imgContainer.append(imgDiv);
    //buttons
    var btnPrev = $("<button>");
    var btnNext = $("<button>");
    var prevIcon = $("<span>");
    var nextIcon = $("<span>");
    btnPrev.addClass("carousel-control-prev");
    btnNext.addClass("carousel-control-next");
    prevIcon.addClass("carousel-control-prev-icon");
    nextIcon.addClass("carousel-control-next-icon");
    btnPrev.attr("data-target", "#carouselControl");
    btnNext.attr("data-target", "#carouselControl");
    btnPrev.attr("data-slide", "prev");
    btnNext.attr("data-slide", "next");
    prevIcon.attr("aria-hidden", "true");
    nextIcon.attr("aria-hidden", "true");
    btnPrev.append(prevIcon);
    btnNext.append(nextIcon);
    carouselControl.append(btnPrev);
    carouselControl.append(btnNext);
  }
}

//credit uploader

//search bar click function
searchBtn.on("click", searchLandmark);
recBtn.on("click", searchCard);
recBtn1.on("click", searchCard1);
recBtn2.on("click", searchCard2);
