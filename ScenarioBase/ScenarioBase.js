// Problem 1 — Task Tracker(Basic Version)
// Scenario

// You are building a task tracker system.
// Users can add tasks with a title.
// Users can mark tasks as done.
// Users can list all tasks.


const taskTracker = {
    tasks: [],
    nextId: 1,

    addTask(title, dueDate = null, priority = 0) {
        this.tasks.push({ id: this.nextId++, title, done: false, dueDate, priority });
    },

    markDone(id) {
        this.tasks = this.tasks.map(item => item.id === id ? { ...item, done: true } : item);
    },

    listTasks({ status = "all", search = "" } = {}) {
        // Filter by status
        let filtered = [...this.tasks].filter(item => {
            if (status.toLowerCase() === "pending" && item.done) return false;
            if (status.toLowerCase() === "done" && !item.done) return false;
            if (search && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });

        // Sort: done → priority → dueDate
        filtered.sort((a, b) => {
            if (a.done !== b.done) return a.done - b.done; // false first
            if (a.priority !== b.priority) return b.priority - a.priority; // higher first
            if (a.dueDate && b.dueDate) return a.dueDate - b.dueDate;
            if (!a.dueDate) return 1;
            if (!b.dueDate) return -1;
            return 0;
        });

        return filtered;
    }
};

// --- Test ---
taskTracker.addTask('Hello2', new Date("2025-12-20"), 4);
taskTracker.addTask('Hello', new Date("2025-12-20"), 5);
taskTracker.addTask('Hello', new Date("2025-12-20"), 2);
taskTracker.addTask('Hello', new Date("2025-12-20"), 1);

taskTracker.markDone(2);
taskTracker.markDone(3);

console.log(taskTracker.listTasks({ status: 'pending', search: 'hello' }));
