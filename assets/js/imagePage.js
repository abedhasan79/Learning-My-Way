


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
