function count() {
    const text = document.getElementById("inputText").value;
    const charCount = text.length;
    document.getElementById("charCount").textContent = `${charCount} ký tự`;
}