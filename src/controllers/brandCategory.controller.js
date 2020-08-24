require("../init");
angular.module('ecomApp')
    .controller("BrandCategoryController",BrandCategoryController);

BrandCategoryController.$inject = ['$scope'];
function BrandCategoryController($scope){
    $scope.brandList = [];
}