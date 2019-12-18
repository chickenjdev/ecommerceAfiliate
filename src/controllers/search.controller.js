/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('SearchController', SearchController);

SearchController.$inject = ['$scope'];

function SearchController($scope) {
    $scope.testServcie = 'tests setse ';
    $scope.data2 = 'testdata';
    $scope.getData = function(data) {
        $scope.data2 = JSON.parse(data);
        console.log($scope.data2)
    }

}
