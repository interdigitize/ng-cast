angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    click: '<'
  },
  templateUrl: 'src/templates/videoList.html',
});
