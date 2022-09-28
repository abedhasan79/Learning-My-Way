//asign
var searchBar = $("#bar");
var searchBtn = $("#searchButton");

// api
//splash
var splashApiLink = "https://api.unsplash.com/photos/:id?q=";
var splashApiKey = "vhzjXLz3kbF0cpvBjxXkR3zMRbAB2eYwP7qI5kxHndQ";
var splashApiSecret = "aCQVXryiUwzsD6CuMJ-RjMNCmKNXB2zv6dmkLiW0-sc";

//function to start once button clicked
function searchLandmark() {
  var landmarkName = searchBar.val().trim();
  fetch(splashApiLink + landmarkName + "client_id=" + splashApiKey);
}

//search bar click function
searchBtn.on("click", searchLandmark);

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
