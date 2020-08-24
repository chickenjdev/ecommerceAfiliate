/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('SessionController',SessionController);

    SessionController.$inject = ['$rootScope','$window','$scope','$cookies'];

function SessionController($rootScope,$window,$scope,$cookies){
    $scope.isLogged = ($cookies.get('login') === '1') ? true : false;
    $scope.name = $cookies.get('user');
    $scope.logOut = function() {
        // $cookies.remove("login");
        // $cookies.remove("user");
        // $cookies.remove("user_sid");
        console.log("logged out ");

    }
}



