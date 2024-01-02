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
    };

    return {
        initialize:function(){
            // save to task list
            // questList = localStorage.getItem("questList") === null ? getQuests() : JSON.parse(localStorage.getItem("questList"))
        }, 
        createTask:function(taskName, taskText){
            createTask(taskName, taskText)
            getTasks()
        },
        questList:function(){
            getTasks()
        }
    }
}())
