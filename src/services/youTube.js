angular.module('video-player')
.service('youTube', function() {

  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: 'AIzaSyCoe0MHYUAkm_seNq3HFZjBwN2-ugmMaac',
      maxResults: 5,
      part: 'snippet',
      q: 'puppy',
      type: 'video'
    }

  }).then(function successCallback(response) {
      console.log(response);
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      console.log('ooops, try again', response);
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  // var settings = {
  //   'async': true,
  //   'crossDomain': true,
  //   'headers': {
  //     'cache-control': 'no-cache',
  //     'postman-token': '62c87d63-bbbd-05a0-5ace-1ff97f7752c8'
  //   }
  // };

  // $.ajax(settings).done(function (response) {
  //   console.log(response);
  // });

});
