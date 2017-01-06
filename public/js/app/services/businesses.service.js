(function(){
  'use strict';

  angular.module('app')
    .factory('BusinessService', BusinessService);

  BusinessService.$inject = ['$http', '$q', 'UserService'];

  function BusinessService($http, $q, UserService) {

    var businesses = null;


    var service = {
      getBusinesses: getBusinesses,
      updateBusiness: updateBusiness
    }

    return service;

    function getBusinesses() {
      if (businesses) return $q.when(businesses);
      return $http.get('/api/businesses')
        .then(function(resp) {
          businesses = resp.data;
          return businesses;
        });
    }

    function updateBusiness(business) {
      console.log(business)
      return $http.put('/api/businesses' ,business)
        .then(function(response){
          UserService.setUserViaToken(response.data.token);
          // AuthTokenService.setToken(token);
          // user = decode(token);
        });
    }
  }

})();
