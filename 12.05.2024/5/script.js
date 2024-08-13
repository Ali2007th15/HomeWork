document.addEventListener("DOMContentLoaded", function () {
  let books = document.querySelectorAll(".book-title");
  let currentActive = null;

  books.forEach(function(book) {
    book.addEventListener("click", function () {
      if (currentActive) {
        currentActive.classList.remove("active");
        currentActive.style.color = "black";
      }
      book.classList.add("active");
      book.style.color = "orange";
      currentActive = book;
    });
  });
});
