function changeColor() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    document.getElementsByClassName("container")[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}
