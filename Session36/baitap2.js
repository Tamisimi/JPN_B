const foods = ["bun-bo", "pho-bo", "com-tam"];

function loadLikes() {
    foods.forEach(food => {
        const likes = localStorage.getItem(food) || 0;
        document.getElementById(`like-${food}`).innerText = likes;
    });
}

function likeFood(food) {
    let likes = parseInt(localStorage.getItem(food) || 0);
    likes++;
    localStorage.setItem(food, likes);
    document.getElementById(`like-${food}`).innerText = likes;
}
loadLikes();
