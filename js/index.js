const lazyImages = document.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        img.src = img.dataset.src;

        img.onload = () => {
          img.classList.add("loaded");
        };

        observer.unobserve(img);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

lazyImages.forEach((img) => {
  observer.observe(img);
});

document.getElementById("loadAll").addEventListener("click", () => {
  lazyImages.forEach((img) => {
    if (!img.src) {
      img.src = img.dataset.src;
      img.onload = () => {
        img.classList.add("loaded");
      };
    }
  });
});
