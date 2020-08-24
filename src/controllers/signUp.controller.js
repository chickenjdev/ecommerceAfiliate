/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', 'UserService'];

function SignUpController($scope, UserService) {
    $scope.data = {
        user_id: "",
        password: "",
        name: ""
    }
    $scope.createUser = function () {
        UserService.createUser($scope.data);
    };
}



