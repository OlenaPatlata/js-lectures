import { Modal, Toast } from 'bootstrap';
import refs from './services/getRefs';
// import * as api from './services/crud_axios';
import * as api from './services/crud';
import { getFormData, fillInForm } from './services/formService';
import findFormErrors from './services/validateUser';
import createUsersMarkup from './templates/createUsersMarkup';

const myModal = new Modal(refs.modal);
const myToast = new Toast(refs.toast, { delay: 5000 });

const showToast = msg => {
  refs.toastText.textContent = msg;
  myToast.show();
};

const handleError = err => showToast(err.message);

// ********************* READ  ********************* //

// Получить всех пользователей и зарендерить их в refs.usersList
// Обработать ошибку и вывести ее в тосте

const renderAllUsers = () => {};

renderAllUsers();

// ********************* CREATE  ********************* //

// Получить данные из формы с помощью ф-ции getFormData
// Проверить наличие ошибок с помощью findFormErrors
// Если есть ошибка - вывести ее в тосте и выйти из ф-ции
// Сохранить нового юзера, и перерендерить всех юзеров
// Очистить форму после перерендера всех юзеров
// Обработать ошибку в catch (вывести ее в тосте)

const handleSaveUser = e => {
  e.preventDefault();
};

refs.form.addEventListener('submit', handleSaveUser);

// ********************* UPDATE / DELETE  ********************* //

// Проверить по дата-атрибуту по какой кнопке был клик, и вызвать соответствующую ф-цию, передав ей id из дата-атрибута

const handleListClick = e => {};

// Удалить юзера, и перерендерить всех юзеров
// Обработать ошибку и вывести ее в тосте

const handleDeleteUser = id => {};

// Получить данные о юзере по id и заполнить ими поля формы refs.modalForm с помощью fillInForm
// Повесить слушателя события на refs.updateBtn
// В обработчике:
// - получить данные из формы refs.modalForm с помощью ф-ции getFormData
// - проверить наличие ошибок с помощью findFormErrors
// - если есть ошибка - вывести ее в тосте и выйти из ф-ции
// - обновить юзера, и перерендерить всех юзеров
// - скрыть форму myModal.hide()
// - удалить слушателя события с refs.updateBtn
// - обработать ошибку и вывести ее в тосте

const handleEditUser = id => {};

const updateUser = user => {
  const saveChanges = () => {};
  refs.updateBtn.addEventListener('click', saveChanges);
};

refs.usersList.addEventListener('click', handleListClick);
refs.modal.addEventListener('hidden.bs.modal', () => refs.modalForm.reset());
