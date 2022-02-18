import { Modal, Toast } from 'bootstrap';
import refs from './services/getRefs';
import * as api from './services/crud_axios';
// import * as api from './services/crud';
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

const renderAllUsers = () =>
  api.getUsers().then(users => {
    const markup = createUsersMarkup(users);
    refs.usersList.innerHTML = markup;
  });

renderAllUsers().catch(handleError);

// ********************* CREATE  ********************* //

// Получить данные из формы с помощью ф-ции getFormData
// Проверить наличие ошибок с помощью findFormErrors
// Если есть ошибка - вывести ее в тосте и выйти из ф-ции
// Сохранить нового юзера, и перерендерить всех юзеров
// Очистить форму после перерендера всех юзеров
// Обработать ошибку в catch (вывести ее в тосте)

const handleSaveUser = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const userData = getFormData(form);
  const formError = findFormErrors(userData);
  if (formError) {
    showToast(formError);
    return;
  }
  api
    .saveUser(userData)
    .then(() => {
      renderAllUsers();
      form.reset();
    })
    .catch(handleError);
};

refs.form.addEventListener('submit', handleSaveUser);

// ********************* UPDATE / DELETE  ********************* //

// Проверить по дата-атрибуту по какой кнопке был клик, и вызвать соответствующую ф-цию, передав ей id из дата-атрибута

const handleListClick = e => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }
  const { id, action } = e.target.dataset;
  if (action === 'edit') {
    handleEditUser(id);
  }
  if (action === 'delete') {
    handleDeleteUser(id);
  }
};

// Удалить юзера, и перерендерить всех юзеров
// Обработать ошибку и вывести ее в тосте

const handleDeleteUser = id => api.deleteUser(id).then(renderAllUsers).catch(handleError);

// Получить данные о юзере по id и заполнить ими поля формы refs.modalForm с помощью fillInForm
// Повесить слушателя события на refs.updateBtn
// В обработчике:
// - получить данные из формы refs.modalForm с помощью ф-ции getFormData
// - проверить наличие ошибок с помощью findFormErrors
// - если есть ошибка - вывести ее в тосте и выйти из ф-ции
// - обновить юзера, и перерендерить всех юзеров
// - скрыть форму myModal.hide()
// - удалить слушателя события с refs.updateBtn
// - обработать ошибку и вывести ее в тост

let userId = null;

const handleEditUser = id =>
  api
    .getUserById(id)
    .then(user => updateUser(user))
    .catch(handleError);

const updateUser = user => {
  fillInForm(refs.modalForm, user);
  userId = user.id;
  refs.updateBtn.addEventListener('click', saveChanges);
};

const saveChanges = () => {
  const userUpdate = getFormData(refs.modalForm);
  const formError = findFormErrors(userUpdate);
  if (formError) {
    showToast(formError);
    return;
  }
  api
    .updateUser(userId, userUpdate)
    .then(() => {
      renderAllUsers();
      myModal.hide();
      userId = null;
    })
    .catch(handleError);
};

refs.usersList.addEventListener('click', handleListClick);

refs.modal.addEventListener('hidden.bs.modal', () => {
  refs.modalForm.reset();
  refs.updateBtn.removeEventListener('click', saveChanges);
});
