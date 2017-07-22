angular.module('video-player')

.component('search', {
  bindings: {
    click: '<'
  },
  controller: function (youTube) {
    this.query = '';
    this.result = () => {
      
    };
    
  },

  templateUrl: 'src/templates/search.html',
});
