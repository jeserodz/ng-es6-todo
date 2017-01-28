function TasksConfig ($stateProvider) {
    'ngInject';

    $stateProvider.state('app.tasks', {
        url: '/tasks',
        templateUrl: 'tasks/tasks.template.html',
        controller: 'TasksCtrl as $ctrl'
    });
}

export default TasksConfig;