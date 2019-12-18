angular.module('ecomApp',[])
.config(['$interpolateProvider',function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{//');
    $interpolateProvider.endSymbol('//}');
}]);