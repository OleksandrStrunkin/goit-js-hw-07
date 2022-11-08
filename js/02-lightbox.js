import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const pallet = document.querySelector(`.gallery`);
const boxMarkup = createImgBox(galleryItems);

pallet.insertAdjacentHTML('beforeend', boxMarkup)
// pallet.addEventListener(`click`, onClickImg)
// console.log(pallet.addEventListener(`click`, onClickImg))

function createImgBox(boxes) {
    return boxes.map(({ preview, original, description }) => {
        return  `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`
    }).join(``);
}

// function onClickImg(event) {
//   event.preventDefault()
//   if (event.target.nodeName !== `IMG`) {
//     return;
//   }
    
// }
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
});
