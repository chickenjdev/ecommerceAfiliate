/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('LoginController',LoginController);

    LoginController.$inject = ['$scope','UserService'];

function LoginController($scope,UserService){
    $scope.data = {
        user_id: null,
        password: null
    }
    $scope.doLogin = function () {
        UserService.login($scope.data)
    }
}



