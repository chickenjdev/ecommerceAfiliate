/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('LoginController',LoginController);

    LoginController.$inject = ['$scope'];

function LoginController($scope){
    $scope.testServcie = 'sssss';
    $scope.test = 'test thu cai ne';

}



