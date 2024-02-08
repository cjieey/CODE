let taskList = [];

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const prioritySelect = document.getElementById('prioritySelect');
      const task = taskInput.value.trim();
      const priority = prioritySelect.value;

      if (task !== '') {
        taskList.push({ task, priority, completed: false });
        displayTaskList();
        taskInput.value = '';
      }
    }

    function markTaskCompleted() {
      const completionInput = document.getElementById('completionInput');
      const taskIndex = parseInt(completionInput.value) - 1; 
      if (Number.isInteger(taskIndex) && taskIndex >= 0 && taskIndex < taskList.length) {
        taskList[taskIndex].completed = true;
        displayTaskList();
        completionInput.value = '';
      } else {
        alert('Invalid task number. Please enter a valid number.');
      }
    }

    function editTask(taskIndex) {
      const task = taskList[taskIndex];
      const newName = prompt('Enter new task name:', task.task);
      const newPriority = prompt('Enter new priority (High, Medium, Low):', task.priority);
      if (newName !== null && newPriority !== null) {
        taskList[taskIndex].task = newName.trim();
        taskList[taskIndex].priority = newPriority.trim();
        displayTaskList();
      }
    }

    function displayTaskList() {
        const taskListDiv = document.getElementById('taskList');
        taskListDiv.innerHTML = '';
    
        if (taskList.length === 0) {
          taskListDiv.innerHTML = 'No tasks available.';
        } else {
          for (let index = 0; index < taskList.length; index++) {
            const task = taskList[index];
            const taskDiv = document.createElement('div');
            const taskNumber = document.createElement('span');
            taskNumber.textContent = index + 1 + '. ';
            taskDiv.appendChild(taskNumber);
    
            const taskSpan = document.createElement('span');
            taskSpan.textContent = task.task;
            if (task.completed) {
              taskSpan.classList.add('completed');
            }
            switch (task.priority) {
              case 'High':
                taskSpan.classList.add('high');
                break;
              case 'Medium':
                taskSpan.classList.add('medium');
                break;
              case 'Low':
                taskSpan.classList.add('low');
                break;
              default:
                break;
            }
            taskDiv.appendChild(taskSpan);
    
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-button');
            editButton.addEventListener('click', () => editTask(index));
            taskDiv.appendChild(editButton);
    
            taskListDiv.appendChild(taskDiv);
        }
      }
    }

    displayTaskList();