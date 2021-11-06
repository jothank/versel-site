app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'clinica/app/views/home.html',
        controller: 'HomeCtrl',
    })

    .when('/about', {
        templateUrl: 'clinica/app/views/about.html',
        controller: 'AboutCtrl',
    })

    .when('/contact', {
        templateUrl: 'clinica/app/views/contact.html',
        controller: 'ContactCtrl',
    })

    .otherwise({ redirectTo: '/' });
});