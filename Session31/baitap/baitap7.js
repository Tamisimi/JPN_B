function renderJobs() {
    let list = "";
    for (let i = 0; i < jobs.length; i++) {
        list +=
            `
        <li> ${jobs[i].name} <button>Sửa</button> <button>Xóa</button></li>
        `
    }
    document.getElementsByClassName("jobs")[0].innerHTML = list;
    console.log(list);
}
renderJobs();

function addJobs() {
    let add = document.getElementById("job").value;
    console.log("name", add);
    
    
}

function deleteJob(id) {
    console.log("gọi hàm xóa", id);
    let index = jobs.findIndex
}
