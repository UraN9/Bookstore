let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail'); // Мініатюри
const mainImg = document.getElementById('mainImage');

// Зміна головного зображення
function changeImageByIndex(index) {
  if (!images[index]) return;

  mainImg.style.opacity = 0;
  setTimeout(() => {
    mainImg.src = images[index].src;
    mainImg.style.opacity = 1;
  }, 300);

  setActiveThumbnail(index);
  currentImageIndex = index;
}

// Встановлення активної мініатюри
function setActiveThumbnail(index) {
  images.forEach(img => img.classList.remove('active'));
  if (images[index]) images[index].classList.add('active');
}

// Автоматичне перемикання
function autoChangeImage() {
  const nextIndex = (currentImageIndex + 1) % images.length;
  changeImageByIndex(nextIndex);
}

// Події на мініатюри
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    changeImageByIndex(index);
  });
});

// Початкова ініціалізація
window.addEventListener('DOMContentLoaded', () => {
  changeImageByIndex(0);
  setInterval(autoChangeImage, 3000);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  let prevIndex = (currentImageIndex - 1 + images.length) % images.length;
  changeImageByIndex(prevIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  let nextIndex = (currentImageIndex + 1) % images.length;
  changeImageByIndex(nextIndex);
});
