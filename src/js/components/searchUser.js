/*
  Написать функцию getUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    https://docs.github.com/en/rest/reference/users#get-a-user
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch - `User ${name} not found`
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.

  * defunkt, atmos, octocat
*/

import refs from '../services/getRefs';
import makeUserMarkup from '../templates/userMarkup';
import api from '../services/api-service';

const getUserData = evt => {
  evt.preventDefault();
};

const printResult = user => {};

const handleError = err => {};

refs.form.addEventListener('submit', getUserData);
