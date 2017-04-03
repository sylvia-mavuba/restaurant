(function () {
    'use stric';

    angular
        .module('myApp', [
            //'myApp' modules list
            'templates',
            'ui.router',
            'pascalprecht.translate',
            'tmh.dynamicLocale',
            'LocalStorageModule',
            'ngSanitize',
            'ngMessages',
            //'angularMoment' (lib for date)
            'myApp.App'
        ])
        .config(function($httpProvider) {
            // set locale in Accept-Language Header
            $httpProvider.defaults.headers.common["Accept-Language"];
        })
        .config(function (localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('myApp')
                .setStorageType('sessionStorage');
        })
        .config(function ($translateProvider, tmhDynamicLocaleProvider) {
            $translateProvider.useLoader("translationLoader");
            $translateProvider.useSanitizeValueStrategy("sanitizeParameters");
            $translateProvider.useMessageFormatInterpolation();
            $translateProvider.addInterpolation('$translateMessageFormatInterpolation');
        })
        .config(function ($urlRouterProvider) {
            $urlRouterProvider.otherwise("/carte-jeune/achat");
        })
        .run(function ($translate, Config) {
            //$translate.use(Config.locale);
        })
        .run(function ($rootScope, $anchorScroll,$log, TrackingService) {
            // Retourne en haut de la page à chaque changement de state de l'application.
            $rootScope.$on('$stateChangeStart',
                function () {
                    $anchorScroll(0);
                });
            /*$rootScope.$on('$stateChangeSuccess', function (event, toState) {

                TrackingService.sendPageTag(toState.name);
            });*/
        });
}());
