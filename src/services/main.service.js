
require('../init');
angular.module('ecomApp')
.controller('MainService',MainService);

MainService.$inject = ['$scope'];

function MainService($scope){
    $scope.testService = 'hello';
}