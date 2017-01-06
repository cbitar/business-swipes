
(function(){
  'use strict';

  angular.module('app').controller('LoginController', LoginController);

  LoginController.$inject = ['UserService', '$state', '$log'];

  function LoginController(UserService, $state, $log) {
    var vm = this;

    vm.login = login;
    vm.errors = null;
    vm.logout = logout;
    vm.getUser = function() {
      vm.user = UserService.getUser();
      return vm.user;
    };
    vm.signUpBusiness = signUpBusiness;

    function signUpBusiness() {
      UserService.signUpBusiness();
      $state.go('dashboard');
    }

    function logout() {
      UserService.logout();
      $state.go('about');
    }

    function login() {
      UserService.login(vm.email, vm.password)
        .then((user) => {
          $('.modal-backdrop').hide();
          $state.go('dashboard')
        })
        .catch((response) => {
          vm.password = '';
          vm.email = '';
          vm.errors = response.data;
        });
    }

  }

})();
