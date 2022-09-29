//asign
var searchBar = $("#bar");
var searchBtn = $("#searchButton");
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
  fetch(`${splashApiLink}${landmarkName}&per_page=3&client_id=${splashApiKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      makeCarousel(data);
    });
}

//imput imgs into carousel
function makeCarousel(imgData) {
  var imgList = data.description;
  for (i = 0; i < imgList.length; i++) {
    var landmarkNameInput = $("<h2>");
    landmarkNameInput.text(data.description);
    carouselControl.append(landmarkNameInput);
  }
}

//search bar click function
searchBtn.on("click", searchLandmark);
