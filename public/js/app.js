(function() {
  var app = angular.module('learnCRISPR')
  app.controller('articlesController', articlesController);
  articlesController.$inject = ['$http', '$location', '$state']
  function articlesController($http, $location, $state) {
    var self = this;
    var server = 'https://murmuring-retreat-96967.herokuapp.com'

    this.goToEdit = function() {
      $location.path('/articles/edit')
      console.log(self.activeArticle);
    }
    this.activeArticle = JSON.parse(localStorage.getItem('article'))

    this.displayArticle = function(index) {
      localStorage.setItem('article', JSON.stringify(self.articles[index]));
    }

    this.updateArticle = function(article) {
      $http.put(`${server}/api/articles/${self.activeArticle.id}`, {article: self.activeArticle}, {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        }
      })
      .then(function(response){
        console.log(response);
        $state.go('articles', {url: '/articles'})
      })
    }

    this.number = 7;
    $http.get(`${server}/api/articles`, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    })
    .then(function(response){
      self.articles = response.data.articles;
      if (response.data.status != 200) {
        $state.go('landing', {url: '/'})
      }
    });

    this.addArticle = function(newArticle) {
      $http.post(`${server}/api/articles`, {article: newArticle}, {
        headers: {
          'Authorization': 'Bearer ' + JSON. parse(localStorage.getItem('token'))
        }
      })
      .then(function(response) {
        newArticle.title = '';
        newArticle.description = '';
        newArticle.abstract = '';
        newArticle.article_url = '';

        $state.go('articles', {url: '/articles'})
      })
      .catch(function(err) {
        console.log(err);
      });
    }

      this.deleteArticle = function(id,index) {
        console.log('frank');
        $http.delete(`${server}/api/articles/${id}`, {
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
          }
        })
        .then(function(response) {
          console.log(response);
          $state.go('articles', {url: '/articles'});
          self.articles.splice(index,1);

        })
      }

  }
  app.controller('AuthCtrl', function($http, $state, $stateParams){
    var self = this;
    var server = 'https://murmuring-retreat-96967.herokuapp.com'
    this.loggedIn = false

    function checkIfLoggedIn() {
      if(localStorage.getItem('token')){
        self.loggedIn = true
      }
    }
    checkIfLoggedIn()

    function login(userPass) {
      self.loggedIn = true;
      $http.post(`${server}/users/login`, {user: {username: userPass.username, password: userPass.password}})
      .then(function(response){
        self.user = response.data.user;
        self.loggedIn = true;

        localStorage.setItem('token', JSON.stringify(response.data.token));
        $state.go('articles', {url: '/articles', user: response.data.user});
      })
      .catch((err) => {
        console.log(err);
      });
    }

    function register(userPass) {
      $http.post(`${server}/users`, {user: {username: userPass.username, password: userPass.password}})
      .then(function(response) {
        console.log(response)
        self.login(userPass)

      })
      .catch((err) => {
        console.log(err);
      });
    }

    function logout(userPass) {
      localStorage.removeItem('token')

      $state.go('landing', {url: '/'})
      self.loggedIn = false;
    }
    this.login = login;
    this.register = register;
    this.logout = logout;

  })

})()
