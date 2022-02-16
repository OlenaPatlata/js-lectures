/*
   infinite-scroll
   
   Example: https://codepen.io/desandro/pen/JJNNqP?editors=0010

  1) Устанавливаем пакет npm install infinite-scroll и импортируем класс InfiniteScroll
  2) Пишем функцию initInfiniteScroll, которая будет инициализировать и запускать бесконечный скрол:
     - нициализируем экземпляр на refs.output, используя функцию в options в свойстве path (full_api_url + this.pageIndex)
     - для этого можно написать доп. метод с классе апи-сервиса, который будет возвращать весь путь без страницы
     - установить поле responseBody - 'json',
     - вызываем метод loadNextPage на экземпляре
     - вешаем слушателя события load, в котором создаем прокси-див, в него рендерим разметку, из него достаем все карточки и аппендим их на экземпляр (appendItems)
  3) Вызываем функцию initInfiniteScroll
  4) Переносим сюда логику работы с кнопками навигации, только вместо запуска функции показать фильмы, очищаем аутпут, дестроим экземпляр и заново вызываем функцию initInfiniteScroll
*/

import InfiniteScroll from 'infinite-scroll';

import refs from './services/refs';
import ApiService from './services/api-service';
import makeMoviesMarkup from './components/moviesMarkup';

const api = new ApiService({ endpoint: 'movie/upcoming' });

let infScroll = null;

const initInfScroll = () => {
  infScroll = new InfiniteScroll(refs.output, {
    path: function () {
      return `${api.getApiUrl()}&page=${this.pageIndex}`;
    },
    history: false,
    responseBody: 'json',
  });

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

    if (data.page >= data.total_pages) {
      infScroll.destroy();
      setTimeout(() => {
        alert('This is the last page');
      }, 500);
    }
  });

  infScroll.loadNextPage();
};

initInfScroll();

////////////////////////////////////////////////////////////////////

const resetView = () => {
  api.resetPage();
  refs.output.innerHTML = '';
  infScroll.destroy();
};

const onCategoryChange = e => {
  if (e.target === e.currentTarget) {
    return;
  }

  const newEndpoint = e.target.dataset.endpoint;
  api.endpoint = newEndpoint;
  resetView();
  initInfScroll();

  const activeBtn = e.currentTarget.querySelector('.btn-info');
  activeBtn?.classList.replace('btn-info', 'btn-outline-info');
  e.target.classList.replace('btn-outline-info', 'btn-info');
};

refs.navBtns.addEventListener('click', onCategoryChange);
