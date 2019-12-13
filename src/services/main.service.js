
require('../init');
angular.module('ecomApp')
.factory('MainService',MainService);

MainService.$inject = [];

function MainService(){
    var testService = 'hello o so ke';
    function getTest() {
        return testService;
    }
    return getTest ;
        
}