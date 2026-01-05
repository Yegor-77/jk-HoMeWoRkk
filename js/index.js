const img = document.querySelector(".lazy-img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img.src = img.dataset.src;

      img.onload = () => {
        img.classList.add("loaded");
      };

      observer.unobserve(img);
    }
  });
});
