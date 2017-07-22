angular.module('video-player')

.component('app', {
  // TODO\
  controller: function (youTube) {
    this.videos = window.exampleVideoData;
    // this.videos = youTube.search();
    console.log(this.videos);
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (value) => {
      this.currentVideo = value;
    };
  },
  templateUrl: 'src/templates/app.html'
});
