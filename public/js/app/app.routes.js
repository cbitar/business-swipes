(function(){
  'use strict';

  angular.module('app').config(routes);

  routes.$inject = ['$urlRouterProvider', '$stateProvider'];

  function routes($urlRouterProvider, $stateProvider) {
    $stateProvider
      // .state('welcome', {
      //   url: '/welcome',
      //   templateUrl: 'js/app/welcome/welcome.html'
      // })
      .state('lesson', {
        url: '/lesson',
        templateUrl: 'js/app/lesson/lesson.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'js/app/about/about.html'
      })
      .state('form-business', {
        url: '/form-business',
        resolve: {
          BusinessService: 'BusinessService',
          businesses: function(BusinessService) {
            return BusinessService.getBusinesses();
          }
        },
        templateUrl: 'js/app/new/form.business.html',
        controller: 'BusinessController as vm'
      })
      .state('edit-business', {
        url: '/edit-business',
        resolve: {
          BusinessService: 'BusinessService',
          businesses: function(BusinessService) {
            return BusinessService.getBusinesses();
          }
        },
        templateUrl: 'js/app/edit/edit.business.html',
        controller: 'EditBusinessController as vm'
      })
      // .state('search', {
      //   url: '/search',
      //   templateUrl: 'js/app/search/search.html',
      //   controller: 'SearchController as vm',
      //   resolve: {
      //     BusinessService: 'BusinessService',
      //     businesses: function(BusinessService) {
      //       return BusinessService.getBusinesses();
      //     }
      //   }
      // })
      .state('login', {
        url: '/login',
        templateUrl: 'js/app/login/login.html',
        controller: 'LoginController as vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'js/app/welcome/home.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        resolve: {
          UserService: 'UserService',
          user: function(UserService) {
            return UserService.getUser();
          }
        },
        templateUrl: 'js/app/dashboard/dashboard.html',
        controller: 'DashboardController as vm'
      });
    $urlRouterProvider.otherwise('/home');
  }
})();

