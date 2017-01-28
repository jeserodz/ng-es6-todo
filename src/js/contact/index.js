import angular from 'angular';

angular.module('app.contact', []);

import contactConfig from './contact.config';
angular.module('app.contact').config(contactConfig);

import ContactCtrl from './contact.controller';
angular.module('app.contact').controller('ContactCtrl', ContactCtrl);