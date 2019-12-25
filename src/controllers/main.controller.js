/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('MainController',MainController);

MainController.$inject = ['$rootScope','$scope','MainService'];

function MainController($rootScope,$scope, MainService){
 
    $scope.test = 'test thu cai ne';
    $scope.testServcie = MainService.getTest();
   
    $scope.changeRoot = function(){

        // console.log('root scope : ',$rootScope.isLogged)
    }
}



