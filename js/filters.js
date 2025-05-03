document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.filter-toggle');
    const filters = document.querySelector('.filters');

    toggleBtn.addEventListener('click', function () {
      filters.classList.toggle('active');
    });
  });