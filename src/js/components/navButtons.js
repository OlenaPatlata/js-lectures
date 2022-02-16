/*
 * Реализуем переключение между вкладками
 *
 * Если нажали на кнопку 'list', скрываем userInfoContainer и показываем listContainer
 * И наоборот при нажатии кнопки 'search', скрываем listContainer и показываем userInfoContainer
 * Также меняем стили активной и обычной кнопки, переставляя классы 'btn-info' и 'btn-outline-info'
 */

import refs from '../services/getRefs';

const onNavButtonClick = e => {};

refs.nav.addEventListener('click', onNavButtonClick);
