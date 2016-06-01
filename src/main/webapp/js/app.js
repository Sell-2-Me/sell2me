var app = angular.module('app', [
    'ui.router',
    'ngResource',
    'angular-jwt'
]);

app.constant('appConstants', {
    BASE_URL : 'http://localhost:8080/'
});

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, appConstants) {
    
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'AuthController',
            controllerAs: 'authctrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'hctrl'
        });

    $httpProvider.defaults.headers.common = {
        'Content-Type': 'application/json'
    };

    $httpProvider.interceptors.push(function ($q) {
        return {
            'request': function (config) {
                config.url = appConstants.BASE_URL + config.url;
                return config || $q.when(config);
            }
        }
    });

});

app.run(function ($rootScope) {
    $rootScope.auth = { authorized : false };
    $rootScope.session = {};
});