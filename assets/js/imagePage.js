


/////////////////////////////////////////////////////
// Youtube getting data and videos

// let youtubeAPI = 'AIzaSyC0s_3--Ea3TtqQ_yU0BJw8NSYdHMwAgD0';
// let search ="Jackson Park windsor"

// let urlReqs = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=10&q='+search+'&key='+youtubeAPI;
// var youtubeUrl = `https://www.youtube.com/embed/`;




// fetch(urlReqs)
//     .then(function (response) {
//         console.log(response.status);
//         return response.json();
//     })
//     .then(function (data,) {
//         console.log(data);
//         console.log(data.errors.message);
//         $('.youTubeVideos1').attr('src',youtubeUrl+data.items[0].id.videoId);
//         $('.youTubeVideos2').attr('src',youtubeUrl+data.items[1].id.videoId);
//         $('.youTubeVideos3').attr('src',youtubeUrl+data.items[2].id.videoId);
//         $('.youTubeVideos4').attr('src',youtubeUrl+data.items[3].id.videoId);
        
//     });

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
let imageUrl = 'https://api.unsplash.com/search/photos?client_id='+splashApiKey+'&query='+'CN tower'+'&page=2';

fetch(imageUrl)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data,) {
        console.log(data);
        $('.img1').attr('src',data.results[0].urls.full);
        $('.img2').attr('src',data.results[1].urls.full);
        $('.img3').attr('src',data.results[2].urls.full);
        $('.img4').attr('src',data.results[3].urls.full);
        $('.img5').attr('src',data.results[4].urls.full);
        
    });


// let searchWiki = 'Jackson park windsor'
// let urlReqs2 = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search="+searchWiki+"&limit=5&namespace=0&format=json";

// fetch(urlReqs2)
//     .then(function (response) {
//         console.log(response.status);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         $('.article').attr('href',data[3][0] );
//     });



