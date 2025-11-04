// ======== MODEL-VIEW-CONTROLLER STRUCTURE ========

// MODEL: Task data and persistence
class Task {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.completed = false;
    this.timestamp = new Date().toLocaleString();
  }
}

class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(text) {
    const newTask = new Task(text);
    this.tasks.push(newTask);
    this.save();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.save();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    this.save();
  }

  editTask(id, newText) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.text = newText;
    this.save();
  }

  getTasks(filter, sort) {
    let filtered = [...this.tasks];
    if (filter === 'completed') filtered = filtered.filter(t => t.completed);
    if (filter === 'incomplete') filtered = filtered.filter(t => !t.completed);

    if (sort === 'alpha') filtered.sort((a, b) => a.text.localeCompare(b.text));
    if (sort === 'time') filtered.sort((a, b) => a.id - b.id);

    return filtered;
  }
}

// ======== VIEW & CONTROLLER ========

class ToDoApp {
  constructor() {
    this.taskManager = new TaskManager();
    this.taskList = document.getElementById('taskList');
    this.taskInput = document.getElementById('taskInput');
    this.filter = 'all';
    this.sort = 'time';

    // event listeners
    document.getElementById('addTaskBtn').addEventListener('click', () => this.addTask());
    document.querySelectorAll('.filters button').forEach(btn =>
      btn.addEventListener('click', () => {
        this.filter = btn.dataset.filter;
        this.render();
      })
    );
    document.querySelectorAll('.sorts button').forEach(btn =>
      btn.addEventListener('click', () => {
        this.sort = btn.dataset.sort;
        this.render();
      })
    );

    this.render();
  }

  addTask() {
    const text = this.taskInput.value.trim();
    if (text) {
      this.taskManager.addTask(text);
      this.taskInput.value = '';
      this.render();
    }
  }

  deleteTask(id, element) {
    element.classList.add('removed');
    setTimeout(() => {
      this.taskManager.deleteTask(id);
      this.render();
    }, 300);
  }

  editTask(id, oldText) {
    const newText = prompt("Edit task:", oldText);
    if (newText !== null && newText.trim() !== '') {
      this.taskManager.editTask(id, newText.trim());
      this.render();
    }
  }

  toggleTask(id) {
    this.taskManager.toggleTask(id);
    this.render();
  }

  render() {
    this.taskList.innerHTML = '';
    const tasks = this.taskManager.getTasks(this.filter, this.sort);

    tasks.forEach(task => {
      const li = document.createElement('li');
      if (task.completed) li.classList.add('completed');

      const textSpan = document.createElement('span');
      textSpan.textContent = task.text;

      const timeSpan = document.createElement('span');
      timeSpan.className = 'timestamp';
      timeSpan.textContent = `(${task.timestamp})`;

      const completeBtn = document.createElement('button');
      completeBtn.className = 'icon-btn';
      completeBtn.textContent = '✅';
      completeBtn.title = 'Mark Complete';
      completeBtn.addEventListener('click', () => this.toggleTask(task.id));

      const editBtn = document.createElement('button');
      editBtn.className = 'icon-btn';
      editBtn.textContent = '✏️';
      editBtn.title = 'Edit Task';
      editBtn.addEventListener('click', () => this.editTask(task.id, task.text));

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'icon-btn';
      deleteBtn.textContent = '❌';
      deleteBtn.title = 'Delete Task';
      deleteBtn.addEventListener('click', e => this.deleteTask(task.id, li));

      li.append(textSpan, timeSpan, completeBtn, editBtn, deleteBtn);
      this.taskList.appendChild(li);
    });
  }
}

// Initialize App
new ToDoApp();
