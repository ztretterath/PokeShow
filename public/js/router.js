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

    $urlRouterProvider.otherwise('/');
  }
})()
