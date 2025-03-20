let textElement = document.getElementById('text');
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById('decrease');
let fontSize = 24;
increaseButton.addEventListener('click', () => {
    fontSize += 2;
    textElement.style.fontSize = fontSize + 'px';
});
decreaseButton.addEventListener('click', () => {
    if (fontSize > 10) {
        fontSize -= 2;
        textElement.style.fontSize = fontSize + 'px';
    }
});