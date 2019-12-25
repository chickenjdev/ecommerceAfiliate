angular.module('ecomApp',['ngCookies'])
.config(['$interpolateProvider',function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{//');
    $interpolateProvider.endSymbol('//}');
}]);