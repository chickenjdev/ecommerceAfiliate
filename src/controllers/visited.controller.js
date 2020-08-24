/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('VisitedController', VisitedController);

VisitedController.$inject = ['$scope','$window'];

function VisitedController($scope,$window) {
    $scope.testServcie = '';
    $scope.items = [{
        product_id: 'p00000006',
        category_id: 'ci-phone',
        branch_id: 'bi-apple',
        name: 'Điện Thoại Samsung Galaxy Note 10 Plus',
        general_info: '{chipset: Qualcom,Ram:4GB}',
        price: 20390000,
        src_image: '/api/imgRe/p00000006.jpg',
        href : '/products/p00000006'

    },
    {
        product_id: 'p00000007',
        category_id: 'ci-phone',
        branch_id: 'bi-apple',
        name: 'Điện Thoại OPPO F11 Pro',
        description: 'Điện thoại iphone thương hiệu trung hoa',
        general_info: '{chipset: Qualcom,Ram:4GB}',
        price: 5990000,
        src_image: '/api/imgRe/p00000007.jpg',
        href : '/products/p00000007'

    },{
        product_id: 'p00000008',
        category_id: 'ci-phone',
        branch_id: 'bi-apple',
        name: 'Điện Thoại OPPO F9 (A11)',
        description: 'Điện thoại iphone thương hiệu trung hoa',
        general_info: '{chipset: Qualcom,Ram:4GB}',
        price:  15989000,
        src_image: '/api/imgRe/p00000008.jpg',
        href : '/products/p00000008'

    },{
        product_id: 'p00000009',
        category_id: 'ci-phone',
        branch_id: 'bi-apple',
        name: 'Điện Thoại Nokia 2.2',
        description: 'Điện thoại iphone thương hiệu trung hoa',
        general_info: '{chipset: Qualcom,Ram:4GB}',
        price: 1739000,
        src_image: '/api/imgRe/p00000009.jpg',
        href : '/products/p00000009'

    },
    {
        product_id: 'p00000009',
        category_id: 'ci-phone',
        branch_id: 'bi-apple',
        name: 'Điện Thoại Nokia 2.2',
        description: 'Điện thoại iphone thương hiệu trung hoa',
        general_info: '{chipset: Qualcom,Ram:4GB}',
        price: 1739000,
        src_image: '/api/imgRe/p00000009.jpg',
        href : '/products/p00000009'

    }]
    $scope.openLink = function(links){
        $window.location.href = links
    }
}
