import YOUTUBE_API_KEY from '../config/youtube.js';
var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      maxResults: options.max,
      part: 'snippet',
      q: options.query,
      key: options.key || YOUTUBE_API_KEY,
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      callback(data.items);
    },
    error: function() {
      console.log('could not fetch videos');
    }
  });
};

export default searchYouTube;


// function getVideo() {
//   $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     data: {
//         key: 'PASTE YOUR API KEY HERE',
//         q: "cats",
//         part: 'snippet',
//         maxResults: 1,
//         type: 'video',
//         videoEmbeddable: true,
//     },
//     success: function(data){
//         embedVideo(data)
//     },
//     error: function(response){
//         console.log("Request Failed");
//     }
//   });
// }