/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('MainController',MainController);

MainController.$inject = ['$scope','MainService'];

function MainController($scope, MainService){
    $scope.testServcie = MainService.getTest;
    $scope.test = 'test thu cai ne';

}



