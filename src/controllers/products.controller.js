/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('ProductsController',ProductsController);

    ProductsController.$inject = ['$scope'];

function ProductsController($scope){
    $scope.testServcie = 'test product';

}
