function ContactConfig($stateProvider) {
    'ngInject';

    $stateProvider.state('app.contact', {
        url: '/contact',
        templateUrl: 'contact/contact.template.html',
        controller: 'ContactCtrl as $ctrl'
    });

}

export default ContactConfig;