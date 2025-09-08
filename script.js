
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.style.opacity = 0;

  const taskSpan = document.createElement('span');
  taskSpan.textContent = task;
  taskSpan.addEventListener('click', () => taskSpan.classList.toggle('completed'));

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Delete';
  removeBtn.onclick = () => {
    li.style.opacity = 0;
    setTimeout(() => li.remove(), 300);
  };

  li.appendChild(taskSpan);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  setTimeout(() => li.style.opacity = 1, 50);
}
