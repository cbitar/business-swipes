// (function(){
//   'use strict';

//   angular.module('app').controller('BusinessController', BusinessController);

//   BusinessController.$inject = ['UserService', '$state', '$log'];

//   function BusinessController(UserService, $state, $log) {
//     var vm = this;
//     vm.errors = null;
//     vm.signUpBusiness = signUpBusiness;
//     vm.newBusiness = {};

//   function signUpBusiness() {
//       UserService.signUpBusiness(vm.newBusiness)
//         .then(function(business) {
//           console.log(business)
//           if(business !== undefined) {
//           $state.go('dashboard');
//           }
//         });
//     }
//   }


// })();

(function(){
  'use strict';

  angular.module('app').controller('BusinessController', BusinessController);

  BusinessController.$inject = ['UserService', '$state', '$log'];

  function BusinessController(UserService, $state, $log) {
    var vm = this;
    vm.errors = null;
    vm.signUpBusiness = signUpBusiness;
    vm.newBusiness = {};


    function signUpBusiness() {
      UserService.signUpBusiness(vm.newBusiness)
        .then(function(business) {
          console.log(business)
          if(business !== undefined) {
          $state.go('dashboard');
          }
        });
      }
    }

})();
