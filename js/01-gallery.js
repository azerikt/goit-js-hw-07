import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const liCreator = [];

galleryItems.forEach((el) => {
  const item = document.createElement("li");
  item.className = `item`;
  liCreator.push(item);
});
gallery.append(...liCreator);

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (galleryItems) =>
      `<li><img class="picture" src=${galleryItems.preview} width = '360' alt='${galleryItems.description}'></img></li>`
  )
  .join("");
list.innerHTML = markup;
