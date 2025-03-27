let background = localStorage.getItem("backgroundColor");
function changeBackground(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}
changeBackground(background);