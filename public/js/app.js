(function() {
  var app = angular.module('learnCRISPR')
  app.controller('articlesController', articlesController);
  articlesController.$inject = ['$http', '$location', '$state']
  function articlesController($http, $location, $state) {
    var self = this;
    var server = 'https://murmuring-retreat-96967.herokuapp.com'

    this.number = 7;
    $http.get(`${server}/api/articles`)
    .then(function(response){
      self.articles = response.data.articles;
    });





  }
  app.controller('AuthCtrl', function($http, $sstate, $stateParams){
    var self = this;
    function log(userPass) {
      $http.post(`${server}/users/login`)
    }

  })

})()
