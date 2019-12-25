/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('CartController',CartController);

    CartController.$inject = ['$rootScope','$scope','$window'];

function CartController($rootScope,$scope,$window){
 
    $scope.test = 'test thu cai ne';
    $scope.goToCart = function(){
        $window.location.href = '/checkout';
    }
}



