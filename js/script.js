document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const bookCards = document.querySelectorAll(".book-card");

  function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    bookCards.forEach(card => {
      const title = card.querySelector(".book-title").textContent.toLowerCase();
      const author = card.querySelector(".author").textContent.toLowerCase();

      if (title.includes(searchTerm) || author.includes(searchTerm)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  searchBtn.addEventListener("click", filterBooks);

  searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      filterBooks();
    }
  });
});
