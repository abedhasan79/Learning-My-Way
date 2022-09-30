//asign
var searchBar = $("#bar");
var searchBtn = $("#searchButton");
var title = $("#title");
var imgContainer = $("#imgContainer");
var carouselControl = $("#carouselControl");

// api
//splash
var splashApiLink = "https://api.unsplash.com/search/photos/?query=";
var splashApiKey = "vhzjXLz3kbF0cpvBjxXkR3zMRbAB2eYwP7qI5kxHndQ";
var splashApiSecret = "aCQVXryiUwzsD6CuMJ-RjMNCmKNXB2zv6dmkLiW0-sc";

//function to start once button clicked
function searchLandmark(event) {
  event.preventDefault();
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
  getWikipedia(landmarkName);
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
    imgInput.addClass("d-block w-100");
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
