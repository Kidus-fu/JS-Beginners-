function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // Add the task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  }