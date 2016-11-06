(function() {
  angular.module('learnCRISPR').controller('articlesController', articlesController);
  articlesController.$inject = ['$http', '$location', '$state']
  function articlesController($http, $location, $state) {
    var self = this;

    this.number = 7;
    var server = 'localhost:3000'
    $http.get(`${server}/api/articles`)
    .then(function(response){
      self.articles = response.data;
      console.log(self.doctors[0].name);
    });





  }

})()
