
require('../init');
angular.module('ecomApp')
.controller('MainService',MainService);

MainService.$inject = ['$scope'];

function BannerService($scope){
    $scope.testService = 'hello';
}