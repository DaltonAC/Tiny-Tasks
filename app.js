taskManager.initialize();

$(function(){

    $('#form').on('submit', function(e){
        e.preventDefault(); // Prevent the default form submission
        let taskName = $('#taskName').val();
        let taskText = $('#taskText').val();
        taskManager.createTask(taskName, taskText);
        return false;
    });

    if ($("#taskList").length){
        let taskList = taskManager.getTasks()
        let vPool="";
        if (taskList.length > 0) {
            jQuery.each(taskList, function(i, val) {
            vPool += val
        });
        } else {
            vPool += "Your inventory is empty!";
        }
        return vPool;
    }

});