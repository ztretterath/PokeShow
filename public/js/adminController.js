(function(){
  angular.module('PokeShow')
  .controller('adminController', adminController);

  function adminController($http, $state) {
    var self = this;

//Allows for admin to create account
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

//Allows for admin to log into account
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

//Allows for admin to create new instance of card
    self.addCard = function(card) {
      return $http({
        url: '/admin/addCard',
        method: 'POST',
        data: card
      })
      .then(function(card){
        self.currentAdmin.cards.push(card)
        self.getCards();
      })
      .catch(function(err){
        console.log(err);
      })
    }

//Allows for admin to delete new instance of card
    self.removeCard = function(card){
      return $http({
        url: `/admin/removeCard/${card._id}`,
        method: 'DELETE',
        data: card
      })
      .then(function(card){
        self.getCards();
      })
      .catch(function(err){
        console.log(err);
      })
    }

//Serves as a means for immediate feedback on the front end
    self.getCards = function(cards) {
      return $http({
        url: '/admin/getCards',
        method: 'GET',
        data: cards
      })
      .then(function(res) {
        self.currentAdmin.cards = res.data.cards
      })
      .catch(function(err){
        console.log(err);
      })
    }

  }
})()
