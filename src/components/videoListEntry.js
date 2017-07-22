angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<', 
    click: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html',
});
