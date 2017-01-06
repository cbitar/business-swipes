(function(){
  'use strict';

  angular.module('app').controller('EditBusinessController', EditBusinessController);

  EditBusinessController.$inject = ['BusinessService', '$state', '$log', 'UserService'];

  function EditBusinessController(BusinessService, $state, $log, UserService) {
    var vm = this;

    vm.editingUser = angular.copy(UserService.getUser());
    vm.editingUser.password = "";
    vm.updateBusiness = updateBusiness;

    function updateBusiness() {
      if (!vm.editingUser.password) delete vm.editingUser.password;
      BusinessService.updateBusiness(vm.editingUser)
      .then(function() {
        $state.go('dashboard');
      });
    };

}


})();
