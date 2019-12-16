/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('VisitedController',VisitedController);

    VisitedController.$inject = ['$scope'];

function VisitedController($scope){
    $scope.testServcie = '';
    
}
