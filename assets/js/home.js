//asign
var searchBar = $("#bar");
var searchBtn = $("#searchButton");

//flickr api
var apiLink =
  "https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg";

//function to start once button clicked
function searchLandmark() {
  var landmarkName = searchBar.val().trim();
  console.log(landmarkName);
}

//search bar click function
searchBtn.on("click");

//flic.kr/p/[short-photo-id] use url shortner
