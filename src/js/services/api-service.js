/*
  Реализовать класс апи-сервиса:
    1) в публичном поле хранить базовый url, в приватном - апи-ключ, endpoint ('') и страницу (1), 
    2) в конструкторе получить объект с полем endpoint - категорией фильмов (upcoming) и инициализировать #endpoint
    2) метод, который фетчит данные:
      - составляет полную строку запроса с параметрами URLSearchParams
      - делает запрос, проверяет ответ
    3) метод, который увеличивает страницу
    4) метод, который сбрасывает страницу
    5) геттер, который возвращает страницу
    6) сеттер, который устанавливает endpoint

      Формат полного url таков:
    https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&page=1

    API_KEY = '73e9137b2a364bbb6dc0bcf09aa07979';
*/
class ApiServise{
  #API_KEY = '99164fc3e2a8208f1f5e9fb36b0f2eb5';
  static base_url = "https://api.themoviedb.org/3";
  #page = 1;
  endpoint = '/movie/upcoming';
  fetchMovies() {
    const queryParams = new URLSearchParams({
      api_key: this.#API_KEY,
      page: this.#page,
    })
    fetch(`${ApiServise.base_url}/${endpoint}?${queryParams}`).then(response =>response.json)
  }
}




infScroll.on('load', function (data) {
  // use element to turn HTML string into elements
  const proxyElem = document.createElement('div');
  // compile data into HTML
  const markup = makeMoviesMarkup(data.results);
  // convert HTML string into elements
  proxyElem.innerHTML = markup;
  // append item elements
  const movieCards = proxyElem.querySelectorAll('.movie-card');
  infScroll.appendItems(movieCards);
});



async function onScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const { height: cardHeight } = refs.gallery.firstElementChild.getBoundingClientRect();

  // scroll starts to execute on 1 card height and less from bottom of document
  if (scrollTop + clientHeight < scrollHeight - cardHeight) {
    return;
  }
  await loadMore();
}
