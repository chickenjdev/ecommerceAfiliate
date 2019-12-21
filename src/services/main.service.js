
require('../init');
(function (){
    'use strict';
    angular.module('ecomApp')
        .factory('MainService', MainService);
    
    MainService.$inject = [];
    
    function MainService() {
        var testService = 'hello o so ke';
        function getTest () {
            return testService;
        }
        function getTest2 () {
            return 'get test 2';
        }
        return {
            "getTest" : getTest,
            "getTest2" : getTest2};
       
    
    }
})();