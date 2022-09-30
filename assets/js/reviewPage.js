

function getWikipedia(input) {
  let urlReqs2 = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + input + "&limit=5&namespace=0&format=json";
  
  fetch(urlReqs2)
    .then(function (response) {
      console.log(response.status);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $('.wikiHead').text("Learn More About " + input + " on Wikipedia");
      $('.wiki').attr('href', data[3][0]);
    });
}


