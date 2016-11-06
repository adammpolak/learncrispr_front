(function(){
  angular.module('learnCRISPR', ['ui.router']).config(MainRouter);
  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/index');

    $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'landing.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    })
    .state('allArticles', {
      url: '/articles',
      templateUrl: '/articles.html',
      controller:
    })
  }
})()
