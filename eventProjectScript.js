//@ts-check

function addMovie(image, title, description, date, price) {
  const movie = document.createElement("div");
  movie.classList.add("card");

  const movieImage = document.createElement("img");
  movieImage.setAttribute("src", image);
  movieImage.setAttribute("alt", "");

  const titleEl = document.createElement("p");
  titleEl.classList.add("title", "format");
  titleEl.innerHTML = title;

  const descriptionEL = document.createElement("p");
  descriptionEL.classList.add("format", "description");
  descriptionEL.innerHTML = description;

  const dateEl = document.createElement("p");
  dateEl.classList.add("format", "date");
  dateEl.innerHTML = date;

  const priceEl = document.createElement("p");
  priceEl.classList.add("format", "price");
  priceEl.innerHTML = price.toFixed(2);

  const cardBtns = document.createElement("div");
  cardBtns.classList.add("card-btns");

  const bookNowBtn = document.createElement("button");
  bookNowBtn.classList.add("book-now");

  const movieSection = document.querySelector("#movies");

  movie.append(movieImage, titleEl, descriptionEL, dateEl, priceEl, cardBtns);
  cardBtns.appendChild(bookNowBtn);

  movieSection.appendChild(movie);
}

// addMovie(
//   "https://www.moviepostersgallery.com/wp-content/uploads/2022/08/Luca3.jpg",
//   "Luca2",
//   "another movie",
//   "29 Oct",
//   5
// );
