import angular from 'angular';

angular.module('app.about', []);

import aboutConfig from './about.config';
angular.module('app.about').config(aboutConfig);

import aboutCtrl from './about.controller';
angular.module('app.about').controller('AboutCtrl', aboutCtrl);