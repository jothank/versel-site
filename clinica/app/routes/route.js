app.config(function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/gencon', {
        templateUrl: 'clinica/app/views/gencon.html',
        controller: 'gencon',
    })

    .when('/genfun', {
        templateUrl: 'clinica/app/views/genfun.html',
        controller: 'genfun',
    })

    .when('/genpac', {
        templateUrl: 'clinica/app/views/genpac.html',
        controller: 'genpac',
    })

    .otherwise({ redirectTo: '/' });
});