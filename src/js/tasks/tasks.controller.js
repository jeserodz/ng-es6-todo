import Task from './task';

class TasksCtrl {
    
    constructor() {
        'ngInject';

        this.newTaskName = '';
        this.tasks = [];
    }

    /**
     * Add a new task
     */
    addNewTask() {
        let task = new Task(this.newTaskName);
        task.id = new Date().getMilliseconds();
        this.tasks.push(task);
    }

    /**
     * Remove a task
     * @param {Task} task - A Task instance
     */
    removeTask(task) {
        this.tasks = this.tasks.filter((t) => {
            return t.id !== task.id;
        });
    }

}

export default TasksCtrl;