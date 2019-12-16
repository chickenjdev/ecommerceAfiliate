/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('SearchController', SearchController);

SearchController.$inject = ['$scope'];

function SearchController($scope) {
    $scope.testServcie = 'tests setse ';
    $scope.data2 = 'testdata';

}
