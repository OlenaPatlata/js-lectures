/*
  Реализовать загрузку юзеров ГитХаба по 10 человек с кнопкой Load More.
  
  Формат полного url таков:
    https://api.github.com/users
    
  Документация по Git API:
    https://docs.github.com/en/rest/reference/users#list-users

  В отдельном файле класс апи-сервиса:
  1) в конструкторе задать адрес апи, сколько элементов на странице и начальную страницу (тут - id юзера)
  2) метод, который фетчит данные:
     - составляет полную строку запроса с параметрами
     - делает запрос, проверяет ответ
     - уыеличивает страницу (тут - определяет последнего id юзера)
  3) метод, который сбрасывает страницу (тут - id юзера)

  В основном файле:
  1) импортим все сервисы и создаем экземпляры
  2) выбираем рефы из дома (кнопка, результат, ошибка)
  3) вешаем слушателя события на кнопку load more

  При первой загрузке (getFirstUsers)
  1) обнуляем счетчик страниц (тут - id юзера)
  2) очищаем контейнер с предыдущими результатами
  3) делаем запрос на АПИ (getUsers)

  Запрос на АПИ (getUsers):
  1) дизейблим кнопку Load More
  2) вызываем функцию с фетчем:
     а) при успешном фетче в then
        - рендерим данные (очищаем реф с ошибкой)
        - показываем кнопку Load More
        - инейблим кнопку Load More
     б) при ошибке в catch
        - очищаем контейнер с предыдущими результатами
        - рендерим ошибку
        - скрываем кнопку Load More
  
  При нажатии кнопки Load More, выполнять Запрос на АПИ (getUsers)

  При изменении количества юзеров на странице, меняем perPage и вызов getFirstUsers
*/

import LoadMoreBtn from '../components/interactive-btn';
import refs from '../services/getRefs';
import createMarkup from '../templates/usersListMarkup';
import api from '../services/api-service';

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  text: 'Show more',
  hidden: true,
});

const getFirstUsers = () => {
  api.resetUserId();
  refs.listTable.innerHTML = '';
  loadMoreBtn.hide();

  getUsers();
};

const getUsers = () => {
  loadMoreBtn.disable();
  api
    .getUsersList()
    .then(users => {
      renderUsers(users);
      loadMoreBtn.show();
      loadMoreBtn.enable();
    })
    .catch(err => {
      renderError(err);
      loadMoreBtn.hide();
    });
};

const renderUsers = users => {
  const markup = createMarkup(users);
  refs.listTable.insertAdjacentHTML('beforeend', markup);
  refs.listError.textContent = '';
};

const renderError = err => {
  refs.listTable.innerHTML = '';
  refs.listError.textContent = err.message;
};

const onPerPageChange = e => {
  api.perPage = e.target.value;
  getFirstUsers();
};

getFirstUsers();

refs.listContainer.addEventListener('change', onPerPageChange);

loadMoreBtn.refs.button.addEventListener('click', getUsers);
