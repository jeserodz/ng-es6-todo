export default class Task {
    constructor(name, status, timeAdded, timeCompleted) {
        this.id = null;
        this.name = name;
        this.status = status || 'pending'
        this.timeAdded = timeAdded || new Date();
        this.timeCompleted = timeCompleted || null;
    }

    /**
     * Marks the tasks as completed or pending
     * @param {boolean} completed - The completion status
     * @return {string} The new task.status value
     */
    complete(completed) {
        if (completed === true) {
            this.status = 'completed';
            this.timeCompleted = new Date();
            return this.status;
        }

        else if (completed === false) {
            this.status = 'pending'
            this.timeCompleted = null;
            return this.status;
        }

        else {
            throw Error('The completed param is incorrect. Provide a boolean value.')
        }
    }
}