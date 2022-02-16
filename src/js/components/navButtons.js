/*
 * Реализуем переключение между вкладками
 *
 * Если нажали на кнопку 'list', скрываем userInfoContainer и показываем listContainer
 * И наоборот при нажатии кнопки 'search', скрываем listContainer и показываем userInfoContainer
 * Также меняем стили активной и обычной кнопки, переставляя классы 'btn-info' и 'btn-outline-info'
 */

import refs from '../services/getRefs';

const onNavButtonClick = e => {
    if (e.target.tagName !== 'BUTTON')     {
        return;
    }
    
if (e.target.dataset.page === 'list') {
    switchHidden(refs.listContainer, refs.userInfoContainer)
} else {
    switchHidden(refs.userInfoContainer, refs.listContainer)
    }
    const activeBtn = e.currentTarget.querySelector('.btn-info');
};

const switchHidden = (elemToShow, elemToHide) => {
    elemToShow.classList.remove('is-hidden');
    elemToHide.classList.add('is-hidden');
}

refs.nav.addEventListener('click', onNavButtonClick);
