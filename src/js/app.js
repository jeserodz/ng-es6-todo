import angular from 'angular';
import 'angular-ui-router';

// Register application submodules
import './layout';
import './config/app.templates';
import './tasks';
import './about';
import './contact';

const requires = [
    'ui.router',
    'templates',
    'app.layout',
    'app.tasks',
    'app.about',
    'app.contact'
];

window.app = angular.module('app', requires);

import constants from './config/app.constants';
angular.module('app').constant('AppConstants', constants);

import appConfig from './config/app.config';
angular.module('app').config(appConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});