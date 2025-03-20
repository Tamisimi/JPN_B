let count = 0;
function countClicks() {
    count++;
    document.getElementById("counter").innerText = "Số lần bấm: " + count;
}