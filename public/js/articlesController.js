(function() {
  angular.module('learnCRISPR').controller('articlesController', articlesController);
  articlesController.$inject = ['$http', '$location', '$state']
  function articlesController($http, $location, $state) {
    var self = this;

    this.number = 7;
    var server = 'https://murmuring-retreat-96967.herokuapp.com/api'
    $http.get(`${server}/articles`)
    .then(function(response){
      self.articles = response.data;
      console.log(self.doctors[0].name);
    });





  }

})()
