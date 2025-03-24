let tasks = JSON.parse(localStorage.getItem('tasks')) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm th' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci ớt ớt' }
];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map((task, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${task.content}</td>
                    <td>${task.dueDate}</td>
                    <td>${task.status}</td>
                    <td>${task.assignedTo}</td>
                    <td>
                        <button onclick="editTask(${task.id})">Sửa</button>
                        <button onclick="deleteTask(${task.id})">Xóa</button>
                    </td>
                </tr>
            `).join('');
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;

    if (content && dueDate && assignedTo) {
        const newTask = { id: Date.now(), content, dueDate, status, assignedTo };
        tasks.push(newTask);
        renderTasks();
        document.getElementById('content').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('assignedTo').value = '';
    } else {
        alert('Please fill in all fields');
    }
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        document.getElementById('content').value = task.content;
        document.getElementById('dueDate').value = task.dueDate;
        document.getElementById('status').value = task.status;
        document.getElementById('assignedTo').value = task.assignedTo;
        deleteTask(id);
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

renderTasks();