import { galleryItems } from "./gallery-items.js";
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

galleryEl.insertAdjacentHTML("beforeend", galleryList);

galleryEl.onclick = (event) => {
  if(event.target.tagName !== "IMG") {
    return;
  }
  event.preventDefault();
  
  const instance = basicLightbox.create(`
  <img width="800" height="600" src="${event.target.dataset.source}">
`, {
      onShow: () => {
          document.addEventListener('keydown', closeModal);
      },
      onClose: () => {
          document.removeEventListener('keydown', closeModal);
      },
  });
  instance.show();
  
      function closeModal(event) {
     if (event.code !== 'Escape') {
         return;
     } 
          instance.close();
          
  }
}
