document.getElementById("search-button").addEventListener("click", function () {
  let api = `fdacdf88`;
  let titleInput = document.getElementById("title");
  let title = titleInput.value.trim();
  let type = document.getElementById("type").value;
  let search = document.getElementById("search-button");
  let pagination = document.getElementById("pagination");
  let details = document.getElementById("details");
  let results = document.getElementById("results");
  let currentPage = 1;
  let totalPages = 1;

  if (title === ``) {
    search.textContent = "Введите название фильма";
    // меняю цвет кнопки на красный, если пользователь не ввёл ничего
    search.style.backgroundColor = "red";
    search.style.color = "white";
    titleInput.style.borderColor = "red";
    return;
  }
  function fetchMovies(page = 1) {
    let link = `https://www.omdbapi.com/?s=${title}&type=${type}&apikey=${api}&page=${page}`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        results.innerHTML = "";
        pagination.innerHTML = "";
        details.innerHTML = "";

        if (data.Response == `True`) {
          data.Search.forEach((movie) => {
            const movieDiv = document.createElement("div");
            movieDiv.className = "movie";

            if (movie.Poster !== "N/A") {
              const moviePoster = document.createElement("img");
              moviePoster.src = movie.Poster;
              movieDiv.appendChild(moviePoster);
            }

            const movieTitle = document.createElement("h2");
            movieTitle.textContent = movie.Title;
            movieDiv.appendChild(movieTitle);
            
            const movieYear = document.createElement("h3");
            movieYear.textContent = `Год выпуска: ${movie.Year}`;
            movieDiv.appendChild(movieYear);

            const details = document.createElement("button");
            details.textContent = "Подробнее";
            details.addEventListener("click", () => showDetails(movie.imdbID));

            movieDiv.appendChild(details);
            results.appendChild(movieDiv);
          });
          totalPages = Math.ceil(parseInt(data.totalResults, 10) / 10);

          const prevButton = document.createElement("button");
          prevButton.textContent = "<<";
          prevButton.disabled = page === 1;
          prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
              currentPage--;
              fetchMovies(currentPage);
            }
          });
          pagination.appendChild(prevButton);

          const startPage = Math.max(1, page - 2);
          const endPage = Math.min(totalPages, page + 2);

          for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.disabled = i === page;
            pageButton.addEventListener("click", () => {
              currentPage = i;
              fetchMovies(currentPage);
            });
            pagination.appendChild(pageButton);
          }

          const nextButton = document.createElement("button");
          nextButton.textContent = ">>";
          nextButton.disabled = page === totalPages;
          nextButton.addEventListener("click", () => {
            if (currentPage < totalPages) {
              currentPage++;
              fetchMovies(currentPage);
            }
          });
          pagination.appendChild(nextButton);
        } else {
          search.textContent = "Фильм не найден";
          search.style.backgroundColor = "red";
          search.style.color = "white";
        }
      })
      .catch((ex) => {
        console.error(ex);
        search.textContent = `Ошибка запроса. Дополнительные сведение можете посмотреть в консоле.`;
        search.style.backgroundColor = "red";
        search.style.color = "white";
      });
  }

  function showDetails(imdbID) {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${api}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        details.innerHTML = `
      <h2>Фильм: ${data.Title}</h2>
      <img src=${data.Poster}</p>
      <p>Дата выпуска: ${data.Released}</p>
      <p>Жанр: ${data.Genre}</p>
      <p>Страна: ${data.Country}</p>
      <p>Директор: ${data.Director}</p>
      <p>Писатель: ${data.Writer}</p>
      <p>Актёры: ${data.Actors}</p>
      <p>Награды: ${data.Awards}</p>`;
      })
      .catch((ex) => {
        console.error(ex);
        search.textContent = `Ошибка запроса. Дополнительные сведение можете посмотреть в консоле.`;
        search.style.backgroundColor = "red";
        search.style.color = "white";
      });
  }
  // это если он нашёл фильм, то вернуть обратно предыдущий стиль кнопки))
  search.textContent = "Найти...";
  search.style.backgroundColor = "black";
  search.style.color = "white";
  titleInput.style.borderColor = "rgb(102, 102, 102)";
  fetchMovies();
  
 
});
