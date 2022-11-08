import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const pallet = document.querySelector(`.gallery`);
const boxMarkup = createImgBox(galleryItems);

pallet.insertAdjacentHTML('beforeend', boxMarkup)
pallet.addEventListener(`click`, onClickImg)
// console.log(pallet.addEventListener(`click`, onClickImg))

function createImgBox(boxes) {
    return boxes.map(({ preview, original, description }) => {
        return `   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join(``);
}

function onClickImg(event) {
  event.preventDefault()
  if (event.target.nodeName !== `IMG`) {
    return;
  }
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
  instance.show();

   window.addEventListener(`keydown`, onCloseEsc)
function onCloseEsc(ev) {
  const isEsKey = ev.code === `Escape`
  if (isEsKey) {
    instance.close();
  }
}
}

