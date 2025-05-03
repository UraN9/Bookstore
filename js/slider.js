let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail');  // Всі мініатюри

// Функція для зміни головного зображення
function changeImage(element) {
  const mainImg = document.getElementById('mainImage');
  mainImg.style.opacity = 0;  // Спочатку робимо картинку непомітною (для анімації)

  // Чекаємо, поки зображення стане непомітним, і змінюємо його
  setTimeout(() => {
    mainImg.src = element.src;
    mainImg.style.opacity = 1; // Поступово повертаємо видимість зображення
  }, 300);  // Час для анімації переходу

  // Оновлюємо активну мініатюру
  setActiveThumbnail(element);
}

// Функція для зміни зображення автоматично кожні 3 секунди
function autoChangeImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  changeImage(images[currentImageIndex]);
}

// Оновлення активної мініатюри
function setActiveThumbnail(element) {
  images.forEach(img => img.classList.remove('active'));
  element.classList.add('active');
}

// Автоматична зміна зображень кожні 3 секунди
setInterval(autoChangeImage, 3000);
