/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('CartController',CartController);

    CartController.$inject = ['$rootScope','$scope','$window','$http'];

function CartController($rootScope,$scope,$window,$http){
 
    $scope.test = 'test thu cai ne';
    $scope.cart = null;
    $scope.userInfo = null;
    $scope.tamtinh = 0 ; 
    $scope.tongtien = 0;
    $scope.tongtien_save = 0;
    $scope.order_id = "";
    $scope.goToCart = function(){
        $window.location.href = '/checkout';
    }
    $scope.formatCurrent
    $scope.init = function(data) {
        if(data) {
            $scope.cart = data[0];
            console.log($scope.cart)
            for (var i = 0; i < $scope.cart.length; i++) {
                $scope.cart[i].total = $scope.cart[i].price + $scope.cart[i].bonus
                $scope.tamtinh += $scope.cart[i].total
                $scope.cart[i].total= $scope.cart[i].total.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
            }
            $scope.userInfo = data[1][0];

        }
        $scope.tongtien_save = $scope.tamtinh;
        $scope.tongtien = $scope.tamtinh.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    $scope.remove = function(product_detail_id){
        var data = {
            product_detail_id : product_detail_id
        }
        $http.post('/api/product/cart-remove-item', JSON.stringify(data)).then(function (result) {
            console.log(result.data.code === "201");

            if(result.data.code === "201"){
                alert('Xóa sản phẩm thành công');
                $window.location.href = '/checkout'
            }
        }, function (error) {
            alert('Có lỗi xảy ra');
            console.log(error);
        });
    }
    $scope.placeOrder = function() {
        var curDay = new Date();
        var order_id = "ord" + curDay.getFullYear() + curDay.getMonth() + curDay.getDay() + curDay.getHours() + curDay.getMinutes() + curDay.getSeconds();
        $scope.order_id = order_id;

        var order_detail = []
        for (var i = 0; i < $scope.cart.length; i++) {
            console.log($scope.cart[i].product_detail_id,'-',$scope.cart[i].quant);
            order_detail.push({
                order_id : $scope.order_id,
                product_detail_id : $scope.cart[i].product_detail_id,
                quantity: $scope.cart[i].quant
            })
        }
        var user_info = $scope.userInfo;

        var data = {
             order_id : order_id,
             address_id : $scope.userInfo.address_id,
             created : new Date(),
             status_code : 0,
             discount_id : "d0",
             total : $scope.tongtien_save,
             order_detail : order_detail
             
        }
        console.log(data)
        $http.post('/api/order/add-order', JSON.stringify(data)).then(function (result) {
            console.log(result.data.code === "201");

            if(result.data.code === "201"){
                alert('Đặt hàng thành công');
                $window.location.href = '/checkout'
            }
        }, function (error) {
            alert('Có lỗi xảy ra');
            console.log(error);
        });

        console.log(user_info);
        $http.post('/api/user/add-address', JSON.stringify($scope.userInfo)).then(function (result) {
            console.log(result.data.code === "201");

            if(result.data.code === "201"){
                
            }
        }, function (error) {
        
            console.log(error);
        });

    }
}



