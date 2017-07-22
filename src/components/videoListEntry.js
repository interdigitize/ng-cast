angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<', 
    click: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html',
});
