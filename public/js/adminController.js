(function(){
  angular.module('PokeShow')
  .controller('adminController', adminController);

  function adminController($http, $state) {
    var self = this;

    self.createAdmin = function(admin){
      return $http({
        url: '/admin/createAdmin',
        method: 'POST',
        data: admin
      })
      then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
    }

    self.login = function(admin){
      return $http({
        url: '/admin/login',
        method: 'POST',
        data: admin
      })
      .then(function(res){
        self.currentAdmin = res.data.user
        console.log(res.data.user);
        $state.go('profile', {url: '/profile'});
      })
      .catch(function(err){
        console.log(err);
      })
    }

  }
})()
