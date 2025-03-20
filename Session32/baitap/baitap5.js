function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    let task = taskInput.value.trim();
    if (task === '') {
        alert("Nhiệm vụ không được để trống!");
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = `
                ${task}
                <button class="delete-btn" onclick="deleteTask(this)">X</button>
            `;

    taskList.appendChild(li);
    taskInput.value = '';
}
function deleteTask(btn) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");
    if (confirmDelete) {
        btn.parentElement.remove();
    }
}