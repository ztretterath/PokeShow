(function(){
  angular.module('PokeShow', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject['$stateProvider', '$urlRouterProvider']

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '../partials/landing.html'
      })
      .state('private', {
        url: '/pssst',
        templateUrl: '../partials/private.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../partials/login.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: '../partials/profile.html'
      })

    $urlRouterProvider.otherwise('/');
  }
})()
