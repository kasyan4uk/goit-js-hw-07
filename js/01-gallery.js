import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryContainer = document.querySelector('.gallery');
const galleryList = creatGalleryList(galleryItems);
gallaryContainer.insertAdjacentHTML("beforeend", galleryList);

function creatGalleryList() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`
    }).join("");
};

gallaryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`, {
       onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
       },
       onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    });

    instance.show();

    function onEscKeyPress(evt) {
     const ESC_KEY_CODE = 'Escape';
     const isEscKey = evt.code === ESC_KEY_CODE;
     if (!isEscKey) return;
     instance.close();
   }
};


console.log(galleryItems);
