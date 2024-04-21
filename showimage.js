document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imageSrc = urlParams.get('src');
    const description = urlParams.get('desc');
    const imageDetail = document.getElementById('imageDetail');
    const descriptionDetail = document.getElementById('descriptionDetail');
    imageDetail.src = imageSrc;
    descriptionDetail.textContent = description || 'Descrizione non disponibile';
});
