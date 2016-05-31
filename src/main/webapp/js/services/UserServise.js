(function(){
    'use strict';
    
    
    angular.module('app')
        .service('userService', ['$resource', 'appConstants', userService]);

    
    function userService($resource, appConstants){
     
        return $resource('users/:id', null, {
            users: {
                method: 'GET',
                isArray: true
            },
            allu: {
                method: 'GET',
                url : appConstants.BASE_URL + 'users',
                isArray: true
            }
        });
        
    }
    
    
    
})();