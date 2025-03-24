let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
                    <li>
                        ${todo} 
                        <button class="delete-btn" onclick="deleteTodo(${index})">Xóa</button>
                    </li>`;
    });
}
function addTodo() {
    const todoInput = document.getElementById("todo-input").value.trim();
    if (todoInput) {
        todos.push(todoInput);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
        document.getElementById("todo-input").value = "";
    } else {
        alert("Vui lòng nhập công việc!");
    }
}
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}
renderTodos();