


/////////////////////////////////////////////////////
// Youtube getting data and videos

let youtubeAPI = 'AIzaSyC0s_3--Ea3TtqQ_yU0BJw8NSYdHMwAgD0';
let search ="Jackson Park windsor"

let urlReqs = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=10&q='+search+'&key='+youtubeAPI;
var youtubeUrl = `https://www.youtube.com/watch?v=`;



fetch(urlReqs)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data,) {
        console.log(data);
        console.log(data.items[0].snippet.title);
        $('.description').attr('src',data.items[0].snippet.thumbnails.default.url);
        $('a').attr('href',(youtubeUrl+data.items[0].id.videoId));
    });

///////////////////////////////////////////////////////




////////////////
// let googlePlaceuRl ='https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key='+youtubeAPI;
    

// fetch(googlePlaceuRl)
//     .then(function (response) {
//         console.log(response.status);
//         return response.json();
//     })
//     .then(function (data,) {
//         console.log(data);
        
//     });


// let redditApi = '7-8TpgVtsil0rOB1Rp-xa7NcyEa-sA';
// let redditSearch = "CN Tower"
// let reddituRl = 'https://www.reddit.com/api/v1/authorize?client_id='+redditApi+'&response_type=code&state='+redditSearch+'&redirect_uri='+'https://abedhasan79.github.io/Landmark-Myway/'+'&duration=permanent&scope=history';

// fetch(reddituRl)
//     .then(function (response) {
//         console.log(response.status);
//         return response.json();
//     })
//     .then(function (data,) {
//         console.log(data);
        
//     });


let splashApiKey = "vhzjXLz3kbF0cpvBjxXkR3zMRbAB2eYwP7qI5kxHndQ";
let imageUrl = 'https://api.unsplash.com/search/photos?client_id='+splashApiKey+'&query='+'dogs'+'&page=1';

fetch(imageUrl)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data,) {
        console.log(data);
        $('.image').attr('src',data.results[0].urls.full);
        
    });


let searchWiki = 'Jackson park windsor'
let urlReqs2 = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="+searchWiki+"&limit=5&namespace=0&format=json";

fetch(urlReqs2)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        $('.article').attr('href',data[3][0] );
    });