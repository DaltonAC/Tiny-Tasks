let taskManager = (function(){
    this.taskList = [];

    this.createTask = function(taskName, taskText){
        // create a task
        let task = [taskName, taskText]
        console.log(task)
        this.taskList.push(task)
        console.log("Current Tasks: " + this.taskList)
        return task
    };

    this.getTasks = function(){
        // get all tasks
        console.log(this.taskList)
        return this.taskList
    };

    return {
        initialize:function(){
            taskList = localStorage.getItem("taskList") === null ? createTask() : JSON.parse(localStorage.getItem("taskList"))

        }, 
        createTask:function(taskName, taskText){
            createTask(taskName, taskText)
        },
        getTasks:function(){
           return getTasks()
        }
    }
}())
