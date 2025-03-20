let images = document.querySelectorAll('.gallery img');
let overlay = document.getElementById('overlay');
let overlayImage = document.getElementById('overlayImage');
images.forEach(image => {
    image.addEventListener('click', () => {
        overlayImage.src = image.src;
        overlay.classList.add('active');
    });
});
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});