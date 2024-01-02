taskManager.initialize();

$(function(){

    $('#form').on('submit', function(e){
        e.preventDefault(); // Prevent the default form submission
        let taskName = $('#taskName').val();
        let taskText = $('#taskText').val();
        taskManager.createTask(taskName, taskText);
        return false;
    });
});