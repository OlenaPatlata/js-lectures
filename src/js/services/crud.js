// Create CRUD operations using https://mockapi.io/

const BASE_URL = 'https://619b979127827600174456bf.mockapi.io';

// ********************* READ  ********************* //

// Написать функцию getUsers, которая делает GET запрос на сервер, чтобы получить список всех юзеров

const getUsers = () => {};

// index.js
// getUsers().then(console.log);
// getUsers().then(users => console.log(users));

// Написать функцию getUserById, которая делает GET запрос на сервер, чтобы получить юзера по id
// Добавить обработку ошибки, если юзера с данным id не существует

const getUserById = id => {};

// index.js
// getUserById(7)
//   .then(user => console.log(user))
//   .catch(err => console.dir(err.message));

// ********************* CREATE  ********************* //

// Написать функцию saveUser, которая делает POST запрос на сервер, чтобы сохранить нового юзера

const saveUser = user => {};

// index.js

// const newUser = {
//   first_name: 'John23',
//   last_name: 'Guff23',
//   email: 'guff233@lines.com',
// };

// saveUser(newUser)
//   .then(user => {
//     console.log(user);
//     return getUsers();
//   })
//   .then(users => console.log(users));

// ********************* UPDATE  ********************* //

// Написать функцию editUser, которая делает PATCH запрос на сервер, чтобы изменить определенные данные у юзера по id
// Добавить обработку ошибки, если юзера с данным id не существует

const editUser = (id, data) => {};

// index.js

// const userIdToEdit = 8;
// const editData = {
//   first_name: 'Ret',
//   email: 'guff3@lines.com',
// };

// editUser(userIdToEdit, editData)
//   .then(user => {
//     console.log(user);
//     return getUsers();
//   })
//   .then(console.log)
//   .catch(err => console.log(err.message));

// Написать функцию updateUser, которая делает PUT запрос на сервер, чтобы изменить определенные данные у юзера по id
// Добавить обработку ошибки, если юзера с данным id не существует

const updateUser = (id, data) => {};

// index.js

// const userIdToUpdate = 7;
// const updateData = {
//   first_name: 'Angela',
//   email: 'ang@lines.com',
//   status: 'vip',
//   id: '55',
// };

// updateUser(userIdToUpdate, updateData)
//   .then(user => {
//     console.log(user);
//     return getUsers();
//   })
//   .then(console.log)
//   .catch(err => console.log(err.message));

// *******************************

// // PATCH
// data = {
//   ...data,
//   ...updateData,
// };

// // PUT
// data = {
//   id: 5,
//   ...updateData,
// };

// ********************* DELETE  ********************* //

// Написать функцию deleteUser, которая делает DELETE запрос на сервер, чтобы удалить юзера по id
// Добавить обработку ошибки, если юзера с данным id не существует

const deleteUser = id => {};

// index.js

// deleteUser(7)
//   .then(getUsers)
//   .then(console.log)
//   .catch(err => console.log(err.message));

// ************************************************** //

export { getUsers, getUserById, saveUser, editUser, updateUser, deleteUser };
