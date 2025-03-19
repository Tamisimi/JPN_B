const title = document.getElementsByTagName('p');
function hideText() {
    title[0].classList.add('hidden');
}
function showText() {
    title[0].classList.remove('hidden');
}