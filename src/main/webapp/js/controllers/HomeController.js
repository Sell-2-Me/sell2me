app.controller('HomeController', ['$scope', '$http', 'userService', '$rootScope',  function($scope, $http, userService, $rootScope)
{
    var vm = this;

    //vm.users = userService.users();
    vm.users = [];
    //vm.auth = $rootScope.auth;

    this.getUsers = function ()
    {
        vm.users = userService.users();
        // $http.get('/user/all').success(function (result, status) {
        //     $scope.users = result;
        // }).error(function (result, status) {
        //     console.log("Error on getUsers();");
        // });

            //console.log(userService.get({id:1}));

    };

}]);