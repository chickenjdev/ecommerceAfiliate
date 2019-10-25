/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('MainController',MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
    $scope.test = 'hello';
    // $scope.testServcie = MainService.testServcie;
}



