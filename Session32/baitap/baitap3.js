let arr = [];
function renderLession() {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += `<li>${arr[i]}</li>`
    }
    let lession = document.getElementById("lession");
    lession.innerHTML = string;
}

function addLession() {
    let inputtext = document.getElementById("inputtext").value.trim();
    if (!inputtext) {
        alert("Không để trống");
        return;
    }
    arr.push(inputtext);
    renderLession();
    document.getElementById("inputtext").value = "";
}