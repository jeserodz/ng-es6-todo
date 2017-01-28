function AboutConfig($stateProvider) {
    'ngInject';

    $stateProvider.state('app.about', {
        url: '/about',
        templateUrl: 'about/about.template.html',
        controller: 'AboutCtrl as $ctrl'
    })
}

export default AboutConfig;