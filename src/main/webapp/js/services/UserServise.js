(function(){
    'use strict';
    
    
    angular.module('app')
        .service('userService', ['$resource', userService]);

    
    function userService($resource){
     
        return $resource('users/:id', null, {
            users: {
                method: 'GET',
                isArray: true
            }
        });
        
    }
    
    
    
})();