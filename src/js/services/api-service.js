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

class ApiService {
  static BASE_URL = 'https://api.themoviedb.org/3';

  #API_KEY = '73e9137b2a364bbb6dc0bcf09aa07979';
  #page = 1;
  #endpoint = '';

  constructor({ endpoint }) {
    this.#endpoint = endpoint;
  }

  fetchMovies() {
    const queryParams = new URLSearchParams({
      api_key: this.#API_KEY,
      page: this.#page,
    });

    return fetch(`${ApiService.BASE_URL}/${this.#endpoint}?${queryParams}`).then(res => {
      if (res.status === 404) {
        return Promise.reject(new Error('Not found'));
      }
      return res.json();
    });
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  set endpoint(value) {
    this.#endpoint = value;
  }

  // for Infinite Scroll
  getApiUrl() {
    const queryParams = new URLSearchParams({
      api_key: this.#API_KEY,
    });
    return `${ApiService.BASE_URL}/${this.#endpoint}?${queryParams}`;
  }
}

export default ApiService;
