let input = document.getElementById("input");
let toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    let type = input.type === "password" ? "text" : "password";
    input.type = type;
    toggle.classList.toggle("fa-eye");
    toggle.classList.toggle("fa-eye-slash");
});