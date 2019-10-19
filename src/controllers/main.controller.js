var app = angular.module('ecomApp',[]).controller('MainController',MainController);

MainController.$inject = ['$scope'];

function MainController($scope){
    $scope.test = 'hello';
}




