// Написать функцию makeMoviesMarkup, которая принимает массив фильмов и возвращает разметку
// Готовим данные:
//  - получаем год релиза
//  - определяем путь картинки или ставим заглушку (https://developers.themoviedb.org/3/getting-started/images)

const cardSample = `
  <div class="movie-card">
    <img
      src="https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"
      alt="Shang-Chi and the Legend of the Ten Rings"
      width="220"
      height="330"
    />
    <h5>Shang-Chi and the Legend of the Ten Rings</h5>
    <p>2021</p>
  </div>`;



const makeMoviesMarkup = movies => {
  movies.map(({ title, release_date, poster_path, popularity }) =>    `
  <div class="movie-card">
    <img
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="${title}"
      width="220"
      height="330"
    />
    <h5>${title}</h5>
    <p>${release_date}</p>
  </div>`
  
  ).join('');
    
}
  
export default makeMoviesMarkup;
