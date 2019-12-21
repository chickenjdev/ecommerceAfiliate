/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('MainController',MainController);

MainController.$inject = ['$scope','MainService'];

function MainController($scope, MainService){
    $scope.test = 'test thu cai ne';
    $scope.testServcie = MainService.getTest();

}



