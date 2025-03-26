const employees = JSON.parse(localStorage.getItem("employees")) || [];
const rowsPerPage = 3;
let currentPage = 1;

function renderEmployees() {
    const tableBody = document.getElementById("employeeTable");
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedEmployees = employees.slice(start, end);

    tableBody.innerHTML = "";
    paginatedEmployees.forEach((employee, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${start + index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.role}</td>
            </tr>`;
    });
    renderPagination();
    localStorage.setItem("employees", JSON.stringify(employees));
}

function renderPagination() {
    const totalPages = Math.ceil(employees.length / rowsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
}

function changePage(page) {
    currentPage = page;
    renderEmployees();
}

function addEmployee() {
    const name = document.getElementById("nameInput").value.trim();
    const role = document.getElementById("roleInput").value.trim();
    if (name && role) {
        employees.push({ name, role });
        document.getElementById("nameInput").value = "";
        document.getElementById("roleInput").value = "";
        currentPage = Math.ceil(employees.length / rowsPerPage);
        renderEmployees();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

renderEmployees();