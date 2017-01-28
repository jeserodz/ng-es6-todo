import angular from 'angular';

let layoutModule = angular.module('app.layout', []);

import HeaderDirective from './header.directive';
layoutModule.directive('appHeader', HeaderDirective);

export default layoutModule;