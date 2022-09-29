// let key= "AIzaSyDmbiXOiWIOyp5qcuRZlYMzL0M7bTwURk8";

//  let apiUrl='https://maps.googleapis.com/maps/api/js?key=' +key +'&callback=initMap';

// alert(apiUrl)
// fetch(apiUrl)
// .then(response => response.json())
// .then((data)=> { 
    
//     console.log(data)

// })

// Initialize and add the map
function initMap() {
    // The location of Uluru
    //const uluru = { lat: -25.344, lng: 131.031 };
    const uluru = {lat: 36.5788364575924, lng: 10.859714482954328};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
  