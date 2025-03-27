function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
