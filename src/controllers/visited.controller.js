/* global angular */
require('../init');

angular.module('ecomApp')
    .controller('VisitedController', VisitedController);

VisitedController.$inject = ['$scope'];

function VisitedController($scope) {
    $scope.testServcie = '';
    $scope.item = {
        product_id: 'p72234812',
        category_id: 'ci-phone',
        branch_id: 'bi-apple',
        name: 'I phone 11 S Pluzzz',
        description: 'Điện thoại iphone thương hiệu trung hoa',
        general_info: '{chipset: Qualcom,Ram:4GB}',
        price: 16200000,
        src_image: ''

    }
}
