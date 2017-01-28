import angular from 'angular';

// Create app.tasks sub-module
angular.module('app.tasks', []);

// Import app.tasks config
import tasksConfig from './tasks.config';
angular.module('app.tasks').config(tasksConfig);

// Import app.tasks controller
import tasksCtrl from './tasks.controller';
angular.module('app.tasks').controller('TasksCtrl', tasksCtrl);