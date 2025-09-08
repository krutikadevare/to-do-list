const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task on Enter
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});

// Function to add task
function addTask(task) {
  const li = document.createElement('li');
  
  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = task;
  taskSpan.addEventListener('click', () => {
    taskSpan.classList.toggle('completed'); // strike-through on click
  });
  
  // Delete button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Delete';
  removeBtn.onclick = () => li.remove();
  
  li.appendChild(taskSpan);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
}
