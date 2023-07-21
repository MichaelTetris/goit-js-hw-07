import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="item-gallery">
    <a class="gallery-link" href="${original}">
      <img
      class="gallery-img"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
    </a>
</li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryList);

new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});