const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');
const addTaskButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('new-task-input');

let dragTask = null;

tasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        dragTask = task;
    });

    task.addEventListener('dragend', () => {
        dragTask = null;
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
    });

    column.addEventListener('dragenter', e => {
        if (dragTask) {
            column.appendChild(dragTask);
        }
    });
});

addTaskButton.addEventListener('click', () => {
    const newTaskName = newTaskInput.value;
    if (newTaskName) {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.draggable = true;
        newTask.textContent = newTaskName;
        columns[0].appendChild(newTask); // Add the new task to the "To-Do" column
        newTaskInput.value = ''; // Clear the input field

        newTask.addEventListener('dragstart', () => {
            dragTask = newTask;
        });

        newTask.addEventListener('dragend', () => {
            dragTask = null;
        });
    }
});

// Add event listeners for moving tasks between columns
columns.forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
    });

    column.addEventListener('dragenter', e => {
        if (dragTask) {
            column.appendChild(dragTask);
        }
    });
});
