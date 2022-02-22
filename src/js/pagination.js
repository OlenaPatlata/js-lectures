/* 
  Просмотр рейтинговых фильмов на https://www.themoviedb.org/
  Реализовать пагинацию с кнопкой Load More.

    Документация по Git API:
    https://developers.themoviedb.org/3/movies/get-upcoming
  
  Формат полного url таков:
    https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

  API_KEY = '73e9137b2a364bbb6dc0bcf09aa07979';
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch.
  
  Результат запроса вывести в поле result в формате:
    Постер
    Название
    Год выпуска

  В отдельных файлах:
    1. Класс апи-сервиса:
      1) в приватном поле хранить апи-ключ, в публичном - базовый url
      2) в конструкторе получить endpoint категорию фильмов (top_rated), задать начальную страницу
      2) метод, который фетчит данные:
        - составляет полную строку запроса с параметрами URLSearchParams
        - делает запрос, проверяет ответ
      3) метод, который увеличивает страницу
      4) метод, который сбрасывает страницу
      5) геттер, который возвращает страницу
    2. Создание рефов (кнопки, результат, ошибка)
    3. Функция, которая принимает массив фильмов и возвращает разметку
    4. Компонент кнопки

  В основном файле:
    1) импортим все сервисы и создаем экземпляры
    2) импортим рефы и функцию для создания разметки 
    3) вешаем слушателя события на кнопку Load More
    4) пишем функцию, которая отображает первую порцию фильмов:
      а) сброс траницы, очистка страницы
      б) кнопку Load More скрыть
      в) вызвать функцию, которая делает запрос на АПИ

  Запрос на АПИ:
    1) вызываем функцию с фетчем:
      а) при успешном фетче в then
          - рендерим данные
          - показываем и инейблим кнопку Load More
          - делаем проверку на последнюю страницу и там скрываем кнопку Load More
      б) при ошибке в catch
          - очищаем контейнер с предыдущими результатами
          - рендерим ошибку
          - скрываем кнопку Load More

  Рендер фильмов:
    1) Готовим данные:
       - получаем год релиза
       - определяем путь картинки или ставим заглушку (https://developers.themoviedb.org/3/getting-started/images)
    2) Создаем разметку и рендерим ее

  При клике по кнопке Load More:
    1) увеличить страницу
    2) саму кнопку сделать недоступной
    3) вызвать функцию, которая делает запрос на АПИ

  Реализовать переключение по разным категориям фильмов (top_rated, upcoming, popular):
    1) Повесить слушатель на родителя кнопок
    2) добавить сеттер в классе апи-сервиса для endpoint (категории фильмов)

  При клике по кнопкам с разными списками фильмов:
    1) установить новый endpoint
    2) заменить классы 'btn-info' и 'btn-outline-info' (убрать с прошлой активной кнопки, повесить на новую)
    3) вызвать функцию, которая отображает первую порцию фильмов
*/

import ApiService from './services/api-service';
import BtnService from './components/interactiveBtn';
import refs from './services/refs';
import makeMoviesMarkup from './components/moviesMarkup';

const api = new ApiService({ endpoint: 'movie/upcoming' });
const loadMoreBtn = new BtnService({ selector: '[data-action="load-more"]', hidden: true });

const getMovies = async() => {
  loadMoreBtn.disable();
  try {
    const {results, page, total_pages: totalPages} = await api
      .fetchMovies();
    renderMovies(data.results);
    loadMoreBtn.show();
    loadMoreBtn.enable();
    if (data.page >= data.total_pages) {
      loadMoreBtn.hide();
      setTimeout(() => {
          alert('This is the last page');
        }, 500);
    }
  } catch (error) {
    handleError(error);
  }
};

const handleError = err => {
  refs.output.innerHTML = '';
  loadMoreBtn.hide();
  // refs.loadMoreBtn.classList.add('is-hidden');
  refs.error.textContent = err.message;
};

getMovies();

const renderMovies = movies => {
  refs.error.textContent = '';
  const markup = makeMoviesMarkup(movies);
  refs.output.insertAdjacentHTML('beforeend', markup);
};

const onLoadMore = () => {
  api.incrementPage();
  getMovies();
};

loadMoreBtn.refs.button.addEventListener('click', onLoadMore);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

////////////////////////////////////////////////////////////////////

const resetView = () => {
  api.resetPage();
  refs.output.innerHTML = '';
  refs.error.textContent = '';
  loadMoreBtn.hide();
};

const onCategoryChange = e => {
  if (e.target === e.currentTarget) {
    return;
  }

  const newEndpoint = e.target.dataset.endpoint;
  api.endpoint = newEndpoint;
  resetView();
  getMovies();

  const activeBtn = e.currentTarget.querySelector('.btn-info');
  activeBtn?.classList.replace('btn-info', 'btn-outline-info');
  e.target.classList.replace('btn-outline-info', 'btn-info');
};

refs.navBtns.addEventListener('click', onCategoryChange);
