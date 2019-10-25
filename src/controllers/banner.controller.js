/* global angular */

require('../init');

angular.module('ecomApp')
    .controller('BannerController', BannerController);

BannerController.$inject = ['$scope'];

function BannerController($scope){

    $scope.hello = "xinchao";
    $scope.currentIndex = 0 ;

    $scope.nextBanner = nextBanner;
    function nextBanner() {
        alert('hello you');
    }

    $scope.switchBanner = switchBanner;
    function switchBanner(a,b){
        
    }
}
