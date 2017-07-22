angular.module('video-player')

.component('app', {
  controller: function (youTube) {
    this.getQuery = (value) => {
      youTube.search(value).then((response) => {
        this.videos = response.data.items;
        this.currentVideo = this.videos[0];
      });
    };

    this.selectVideo = (value) => {
      this.currentVideo = value;
    };

    this.getQuery();
  },
  templateUrl: 'src/templates/app.html'
});
