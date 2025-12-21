// Problem 1 — Task Tracker(Basic Version)
// Scenario

// You are building a task tracker system.
// Users can add tasks with a title.
// Users can mark tasks as done.
// Users can list all tasks.


const taskTracker = {
    tasks: [],
    nextId: 1,

    addTask(title, dueDate) {
        console.log(dueDate)
        let year = dueDate.getFullYear()
        let month = dueDate.getMonth() + 1
        let date = dueDate.getDate()
        let DDate = `${year}-${month}-${date}`
        this.tasks.push({ id: this.nextId, title, done: false, dueDate: DDate })
        // this.nextId : this.nextId++
        this.nextId++

    },
    markDone(id) {
        // Task: mark task as done by ID
        this.tasks = this.tasks.map((item) => {
            return item.id === id ? { ...item, done: true } : item
        })

    },

    listTasks() {
        // Task: return all tasks with their status
        return this.tasks
    }

}
taskTracker.addTask('Hello', new Date("2025-12-20"))
taskTracker.addTask('Hello2 ', new Date("2025-12-20"))
taskTracker.markDone(2)
console.log(taskTracker.listTasks())
