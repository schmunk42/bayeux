'use strict';

/* globals constants */
/* globals params */
/* globals $ */

/**
 * @ngdoc overview
 * @name htckApp
 * @description
 * # htckApp
 *
 * Main module of the application.
 */
angular
  .module('htckApp', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngTouch',
    'ngMaterial',
    'ngDragDrop',
    'cfp.hotkeys'
  ])
  .config(function ($routeProvider, $logProvider) {
    $.extend(constants, params);

    $logProvider.debugEnabled(false);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
