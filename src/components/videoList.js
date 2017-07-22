angular.module('video-player')
.component('videoList', {
  controller: function () {
    
  },
  bindings: {
    videos: '<',
    click: '<'
  },
  templateUrl: 'src/templates/videoList.html',
});
