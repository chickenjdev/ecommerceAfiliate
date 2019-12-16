/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('ProductsController',ProductsController);

    ProductsController.$inject = ['$scope'];

function ProductsController($scope){
    $scope.testServcie = 'test product';
    $scope.getdata = [];
    $scope.getdata1 = 'hello'
    $scope.show= false;
    $scope.init = function(stringifiedArray) {
        // var info = JSON.parse(stringifiedArray);
        console.log(stringifiedArray)
        $scope.getdata = stringifiedArray;
    }
    $scope.getdatas = function() {
        // var info = JSON.parse(stringifiedArray);
        return $scope.getdata;
    }
}
