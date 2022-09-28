//asign
var searchBar = $("#bar");
var searchBtn = $("#searchButton");

// api
//flick
var flickApiLink =
  "https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg";
var flickApiKey = "bf5af6f6035bbed9eaae9ff37805fd5e";
var flickApiSecret = "8fa38f3db4dff9f6";

//splash
var splashApiLink = "https://api.unsplash.com/photos/?client_id=";
var splashApiKey = "vhzjXLz3kbF0cpvBjxXkR3zMRbAB2eYwP7qI5kxHndQ";
var splashApiSecret = "aCQVXryiUwzsD6CuMJ-RjMNCmKNXB2zv6dmkLiW0-sc";

//function to start once button clicked
function searchLandmark() {
  var landmarkName = searchBar.val().trim();
  fetch(splashApiLink + landmarkName + splashApiSecret);
  console.log(landmarkName);
}

//search bar click function
searchBtn.on("click", searchLandmark);

//flic.kr/p/[short-photo-id] use url shortner
