(function(){
  angular.module('LearnCRISPR', ['ui.router']).config(MainRouter);
  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'landing.html',
    })
  }
})()
