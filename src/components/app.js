angular.module('video-player')

.component('app', {
  // TODO\
  controller: function () {
    
    // this.videos = $http.get();
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.onClick = (value) => {
      this.currentVideo = value;
    };
  },
  templateUrl: 'src/templates/app.html'
});
