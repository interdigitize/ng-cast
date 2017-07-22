angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = function (query = 'sean spicer') {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      
      params: {
        key: $window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
      }
    }).then(function successCallback(response) {
      // callback(response);
      return response;
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
      console.log('ooops, try again', response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
});

