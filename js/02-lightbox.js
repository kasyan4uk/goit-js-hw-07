import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryContainer = document.querySelector('.gallery');
const gallaryList = createGallaryList(galleryItems);
gallaryContainer.insertAdjacentHTML('beforeend', gallaryList);

function createGallaryList() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join("");
}


const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,});

console.log(galleryItems);
