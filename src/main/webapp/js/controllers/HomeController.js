app.controller('HomeController', ['$scope', '$http', 'userService', '$rootScope',  function($scope, $http, userService, $rootScope)
{
    var vm = this;

    vm.users = [];

    this.getUsers = function ()
    {
        vm.users = userService.users();

    };

}]);