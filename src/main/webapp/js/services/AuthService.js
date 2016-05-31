(function(){
    'use strict';
    
    angular.module('app')
        .service('loginService', ['$resource', loginService]);
    
    function loginService($resource){

        return $resource('auth', null, {
            auth: { method: 'POST' },
            refresh: { method: 'GET' }
        });
        
    }


})();
