/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('ProductsController',ProductsController);

    ProductsController.$inject = ['$scope','$http','$cookies','$window'];

function ProductsController($scope,$http,$cookies,$window){

    $scope.testServcie = 'test product';
    $scope.getdata = [];
    $scope.getdata1 = 'hello'
    $scope.show= false;

    $scope.product = null;
    $scope.options = null;

    $scope.product_detail_id = null;

    $scope.option1 = null;
    $scope.price = 0;
    $scope.bonus = 0;
    $scope.quantity = 1;

    $scope.init = function(data) {
        $scope.product = data[0];
        $scope.options = data[1];

        $scope.price = $scope.product.price;
        $scope.product_detail_id=$scope.options[0].product_detail_id;
        $scope.option1 = $scope.options[0].option1;
        $scope.bonus = $scope.options[0].bonus;

    }
    $scope.optionChoise = function(option,color) {
        $scope.option1 = color;
        $scope.product_detail_id = option;
        console.log($scope.option1)
    }
    $scope.addToCart = function(){
        if($cookies.get("login")==='1'){
            var cart = {
                user_id : $cookies.get('userx'),
                product_detail_id : $scope.product_detail_id,
                quant : $scope.quantity
            }
            
            $http.post('/api/product/cart-to-cart', JSON.stringify(cart)).then(function (result) {
                console.log(result);
                if(result.data.code === "201"){
                    alert("Sản phẩm đã được thêm vào giỏ hàng");
                }else {
                    alert("Sản phẩm đã được thêm vào giỏ hàng");
                }
            }, function (error) {
                console.log(error);
            });
        }else $window.location.href = "/login"

    }
    $scope.updateQuant = function (num) {
        if($scope.quantity + num > 0 )
        $scope.quantity += num;
    }
}
