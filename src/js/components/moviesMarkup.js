// Написать функцию makeMoviesMarkup, которая принимает массив фильмов и возвращает разметку
// Готовим данные:
//  - получаем год релиза
//  - определяем путь картинки или ставим заглушку (https://developers.themoviedb.org/3/getting-started/images)

// const cardSample = `
//   <div class="movie-card">
//     <img
//       src="https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
//       alt="Shang-Chi and the Legend of the Ten Rings"
//       width="220"
//       height="330"
//     />
//     <h5>Shang-Chi and the Legend of the Ten Rings</h5>
//     <p>2021</p>
//   </div>`;

import notFoundImg from '../images/not_found_ver.jpg';

const makeMoviesMarkup = movies =>
  movies
    .map(({ title, release_date, poster_path }) => {
      const year = new Date(release_date).getFullYear();
      const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : notFoundImg;

      return makeMovieCard({ title, year, poster });
    })
    .join('');

const makeMovieCard = ({ title, year, poster }) => `
  <div class="movie-card">
    <img src="${poster}" alt="${title}" width="220" height="330" />
    <h5>${title}</h5>
    <p>${year}</p>
  </div>`;

export default makeMoviesMarkup;
