require("../init");
angular.module('ecomApp')
    .controller("SaleBoardController", SaleBoardController);

SaleBoardController.$inject = ['$scope'];
function SaleBoardController($scope) {
    $scope.items = [
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        },
        {
            name: 'I phone 1'
        }
    ];
}