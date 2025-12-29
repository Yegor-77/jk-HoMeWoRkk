const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const resizeImage = _.debounce((value) => {
  image.style.width = value * 3 + "px";
}, 100);

slider.addEventListener("input", (e) => {
  resizeImage(e.target.value);
});

//2
const box = document.getElementById("box");

const moveBox = _.debounce((e) => {
  box.style.left = e.clientX + "px";
  box.style.top = e.clientY + "px";
}, 100);

document.addEventListener("mousemove", moveBox);
