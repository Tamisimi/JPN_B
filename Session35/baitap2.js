function showModal() {
    document.getElementById('bookmarkModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('bookmarkModal').style.display = 'none';
}
function saveBookmark() {
    const name = document.getElementById('siteName').value;
    const url = document.getElementById('siteUrl').value;
    if (!name || !url) return alert('Please fill in both fields');
    const bookmark = { name, url };
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
    closeModal();
}
function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks = bookmarks.filter(b => b.url !== url);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}
function renderBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarksContainer = document.getElementById('bookmarks');
    bookmarksContainer.innerHTML = bookmarks.map(b => `
                <div class="bookmark">
                    <a href="${b.url}" target="_blank">${b.name}</a>
                    <button onclick="deleteBookmark('${b.url}')">X</button>
                </div>
            `).join('');
}
renderBookmarks();