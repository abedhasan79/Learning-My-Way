//asign
var searchBar = $("#bar");
var searchBtn = $("#searchButton");
var title = $("#title");
var imgContainer = $("#imgContainer");

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
}

//imput imgs into carousel
function makeCarousel(imgData) {
  console.log(imgData);
  for (i = 0; i < imgData.length; i++) {
    //header description
    var titleDiv = $("<div>");
    var titleInput = $("<h3>");
    titleInput.text(imgData[i].alt_description);
    titleDiv.append(titleInput);
    imgContainer.append(titleDiv);
    //img input 1
    var imgDiv = $("<div>");
    var imgInput = $("<img>");
    var imgLink = imgData[i].urls.full;
    imgDiv.addClass("carousel-item active");
    imgInput.addClass("d-block w-100");
    imgInput.attr("src", imgLink);
    imgDiv.append(imgInput);
    imgContainer.append(imgDiv);
    //buttons
  }
}

//credit uploader

//search bar click function
searchBtn.on("click", searchLandmark);
