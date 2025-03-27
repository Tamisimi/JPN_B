const STATUS = {
    PENDING: "pending",
    IN_PROGRESS: "inProgress",
    DONE: "done"
};

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(tasks);
}

function addTask() {
    const taskName = document.getElementById("taskName").value.trim();
    if (taskName === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = { id: Date.now(), name: taskName, status: STATUS.PENDING };
    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskName").value = "";
    renderTasks(tasks);
}

function updateTaskStatus(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.id === id) {
            if (task.status === STATUS.PENDING) {
                task.status = STATUS.IN_PROGRESS;
            } else if (task.status === STATUS.IN_PROGRESS) {
                task.status = STATUS.DONE;
            }
        }
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks);
}

function renderTasks(tasks) {
    document.getElementById("pendingTasks").innerHTML = "";
    document.getElementById("inProgressTasks").innerHTML = "";
    document.getElementById("doneTasks").innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <p>${task.name}</p>
            ${task.status !== STATUS.DONE ? `<button onclick="updateTaskStatus(${task.id})">Chuyển</button>` : ""}
        `;

        if (task.status === STATUS.PENDING) {
            document.getElementById("pendingTasks").appendChild(taskElement);
        } else if (task.status === STATUS.IN_PROGRESS) {
            document.getElementById("inProgressTasks").appendChild(taskElement);
        } else {
            document.getElementById("doneTasks").appendChild(taskElement);
        }
    });
}

loadTasks();
