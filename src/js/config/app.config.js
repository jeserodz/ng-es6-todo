function AppConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider.state('app', {
        templateUrl: 'layout/app-layout.html',
        abstract: true
    });

    $urlRouterProvider.otherwise('/tasks');
}

export default AppConfig;