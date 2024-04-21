const searchInput = document.getElementById('search');
searchInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        search();
    }
});
function search() {
    const searchTerm = searchInput.value;
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchTerm}`;
    const imageGrid = document.getElementById('imageGrid');
    const searchContainer = document.querySelector('.search-container');
    imageGrid.style.display = 'grid';
    fullscreenImage.style.opacity = '0';
    searchContainer.style.display = 'none';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayImages(data);
        })
        .catch(error => console.error('Errore durante il recupero delle immagini:', error));
}
function displayImages(data) {
    console.log(data);
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';
    for (let image of data.collection.items) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        const imgElement = document.createElement('img');
        imgElement.src = image.links[0].href || image.links[0].href;
        const description = document.createElement('p');
        imgElement.addEventListener('click', () => {
            openImagePage(image.links[0].href, image.data[0].description);
        });
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(description);
        imageGrid.appendChild(imageContainer);
    }
}
function openImagePage(imageSrc, description) {
    const url = `showimage.html?src=${encodeURIComponent(imageSrc)}&desc=${encodeURIComponent(description)}`;
    window.open(url, '_blank');
}
