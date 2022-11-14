// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCards(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

function createImageCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});
