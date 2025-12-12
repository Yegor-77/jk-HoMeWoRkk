import galleryItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImg: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
  overlay: document.querySelector(".lightbox__overlay"),
};

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`;

refs.gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(createGalleryItem).join("")
);

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  openModal(event.target.dataset.source, event.target.alt);
}

function openModal(src, alt) {
  refs.lightbox.classList.add("is-open");
  refs.lightboxImg.src = src;
  refs.lightboxImg.alt = alt;
  window.addEventListener("keydown", onEscPress);
}

refs.closeBtn.addEventListener("click", closeModal);
refs.overlay.addEventListener("click", closeModal);

function closeModal() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImg.src = "";
  refs.lightboxImg.alt = "";
  window.removeEventListener("keydown", onEscPress);
}

function onEscPress(e) {
  if (e.code === "Escape") closeModal();
}
