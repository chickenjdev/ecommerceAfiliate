/* global angular */
require('../init');
require('angular-cookies');

angular.module('ecomApp')
    .controller('LoginController',LoginController);

    LoginController.$inject = ['$scope','$cookies','UserService'];

function LoginController($scope,$cookies,UserService){
    $scope.data = {
        user_id: null,
        password: null
    }
    $scope.doLogin = function () {

        UserService.login($scope.data)
    }
}



