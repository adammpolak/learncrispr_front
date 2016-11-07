(function(){
  angular.module('learnCRISPR', ['ui.router']).config(MainRouter);
  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'landing.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    })
    .state('articles', {
      url: '/articles',
      templateUrl: '/articles.html',
      controller: 'articlesController',
      controllerAs: 'articles'
    })
    .state('new article', {
      url: '/articles/new',
      templateUrl: '/articlenew.html',
      controller: 'articlesController',
      controllerAs: 'articles'
    })
    .state('editArticle', {
      url: '/articles/edit',
      params: {
        article: null
      },
      templateUrl: '/articleedit.html',
      controller: 'articlesController',
      controllerAs: 'articles'
    })
    .state('article', {
      url: '/articles/article',
      templateUrl: '/article.html',
      controller: 'articlesController',
      controllerAs: 'articles'
    })
  }
})()
