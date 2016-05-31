
app.controller('LoginController', ['$scope', '$rootScope', '$http', '$state', 'loginService',
    function($scope, $rootScope, $http, $state, loginService)
    {
        var vm = this;

        this.login = function()
        {
            loginService.auth($scope.user,
                function (success) {
                    $http.defaults.headers.common['X-Auth-Token'] = success.token;
                    $state.go('home');
                    $rootScope.auth.authorized = true;
                },
                function (error) {
                    if (error.status === 401) {
                        console.log("BAD CREDENTIALS");
                        window.alert('Wrong username or password');
                    } else {
                        console.log('Error: status = [' + error.status + ']');
                }
            });
        };

    }
]);