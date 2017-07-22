angular.module('video-player')

.component('app', {
  controller: function (youTube) {
    youTube.search().then((response) => {
      this.videos = response.data.items;
      this.currentVideo = this.videos[0];
    });

    this.selectVideo = (value) => {
      this.currentVideo = value;
    };
  },
  templateUrl: 'src/templates/app.html'
});
