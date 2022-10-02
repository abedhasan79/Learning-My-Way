//Done By Abed H.

let searchList = $('.searchList')
let searchLists = [];

// function gets data from youtubes api and gets the 1st 4 videos related to the topic searched.
function getYoutube(input) {
    let youtubeAPI = 'AIzaSyC0s_3--Ea3TtqQ_yU0BJw8NSYdHMwAgD0';
    let urlReqs = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=10&q=' + input + '&key=' + youtubeAPI;
    let youtubeUrl = 'https://www.youtube.com/embed/';
    fetch(urlReqs)
        .then(function (response) {
            console.log(response.status);
            return response.json();
        })
        .then(function (data,) {
            console.log(data);
            $('.youTubeVideos1').attr('src', youtubeUrl + data.items[0].id.videoId);
            $('.youTubeVideos2').attr('src', youtubeUrl + data.items[1].id.videoId);
            $('.youTubeVideos3').attr('src', youtubeUrl + data.items[2].id.videoId);
            $('.youTubeVideos4').attr('src', youtubeUrl + data.items[3].id.videoId);

        });

}



///////////////
// local storage

// makes an array of search lists
function makeSearchList(input) {
    searchLists.push(input);
}

// creats a list of topics that has been searched
function createSearchList(input) {
    searchList.append($('<li>').addClass('p-3 btn btn-primary btn-lg serchListCreated button is-info').text(input));
}

// saves the search topic to local storage
function saveSearchListInStorage() {
    localStorage.setItem('search-list', JSON.stringify(searchLists));
}

// displayes the saved search topics on page refresh
function renderSerchList() {
    let savedSearchList = JSON.parse(localStorage.getItem('search-list'));
    if (savedSearchList !== null) {
        searchLists = savedSearchList;
    }
    for (let i = 0; i < searchLists.length; i++) {
        createSearchList(savedSearchList[i]);
    }
}
renderSerchList();

// adding a click event to the list that is saved in local storage
// so we can get the content back on clicking it

$('ul').on('click','.serchListCreated', function (e) {
    e.preventDefault();
    // $("#sectionHeaders").css('display', 'none');
    imgContainer.children().remove();

    let search = $(this).text();
    console.log(search);
    fetch(`${splashApiLink}${search}&per_page=5&client_id=${splashApiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var results = data.results;
            makeCarousel(results);
        });

    getYoutube(search);
    $('figure').css('display','block');
    getWikipedia(search);
});