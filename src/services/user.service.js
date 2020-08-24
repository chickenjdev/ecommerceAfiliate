const apiList = require('../api/list/apiList');
require('../init');

(function () {
    'use strict';

    angular.module('ecomApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$rootScope','$http','$window'];

    function UserService($rootScope,$http,$window) {

        function createUser(data) {
            var data = data;
            $http.post(apiList.urlCreateUser, JSON.stringify(data)).then(function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }

        function login(data) {
            var data = data;
            $http.post(apiList.urlLoginUser, JSON.stringify(data)).then(function (result) {
                console.log(result);
                if(result.data.code == 210){
                    $window.location.href = '/';
                }
            }, function (error) {
                console.log(error);
            });
        }
     

        return { 
            "createUser" : createUser ,
            "login" : login
        };

    }
})();