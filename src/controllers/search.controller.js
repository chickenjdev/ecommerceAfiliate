/* global angular */
require('../init');

var customInterpolationApp = angular.module('ecomApp');

// customInterpolationApp.config(['$interpolateProvider',function ($interpolateProvider) {
//     $interpolateProvider.startSymbol('{//');
//     $interpolateProvider.endSymbol('//}');
// }]);

customInterpolationApp.controller('SearchController', SearchController);

SearchController.$inject = ['$scope'];

function SearchController($scope) {
    $scope.testServcie = 'tests setse ';
    $scope.data2 = 'testdata';
    $scope.getData = function (data) {
        $scope.data2 = JSON.parse(data);
        console.log($scope.data2)
    }

}
