
app.controller('AuthController', ['$scope', '$rootScope', '$http', '$state', 'loginService', 'jwtHelper',
    function($scope, $rootScope, $http, $state, loginService, jwtHelper) {
        var vm = this;

        this.login = function()
        {
            console.log("1");
            loginService.auth($scope.user,
                function (success) {
                    $http.defaults.headers.common['X-Auth-Token'] = success.token;
                    console.log("2");
                    $state.go('home');
                    $rootScope.auth.authorized = true;
                    var claims = jwtHelper.decodeToken(success.token);
                    $rootScope.session = claims.user;
                    console.log(claims.user);
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