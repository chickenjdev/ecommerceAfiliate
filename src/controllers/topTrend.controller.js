/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('TopTrendController',TopTrendController);

    TopTrendController.$inject = ['$scope'];

function TopTrendController($scope){
    $scope.testServcie = '';
    
}
