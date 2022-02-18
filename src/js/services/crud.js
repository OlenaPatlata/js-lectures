// Create CRUD operations using https://mockapi.io/

const BASE_URL = 'https://619b979127827600174456bf.mockapi.io';

// ********************* READ  ********************* //

// Написать функцию getUsers, которая делает GET запрос на сервер, чтобы получить список всех юзеров

const getUsers = () => {
  return fetch(`${BASE_URL}/users`).then(res =>
    res.ok ? res.json() : Promise.reject(new Error(res.statusText)),
  );
};

// index.js
// getUsers().then(console.log);
// getUsers().then(users => console.log(users));

// Написать функцию getUserById, которая делает GET запрос на сервер, чтобы получить юзера по id
// Добавить обработку ошибки, если юзера с данным id не существует

const getUserById = id => {
  return fetch(`${BASE_URL}/users/${id}`).then(res =>
    res.ok ? res.json() : Promise.reject(new Error(res.statusText)),
  );
};

// index.js
// getUserById(5)
//   .then(user => console.log(user))
//   .catch(err => console.dir(err.message));

// ********************* CREATE  ********************* //

// Написать функцию saveUser, которая делает POST запрос на сервер, чтобы сохранить нового юзера

const saveUser = user => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  };

  return fetch(`${BASE_URL}/users`, options).then(res =>
    res.ok ? res.json() : Promise.reject(new Error(res.statusText)),
  );
};

// index.js

const newUser = {
  first_name: 'John55',
  last_name: 'Guff55',
  email: 'guff55@lines.com',
};

// saveUser(newUser)
//   .then(user => {
//     console.log(user);
//     return getUsers();
//   })
//   .then(users => console.log(users));

// ********************* UPDATE  ********************* //

// Написать функцию editUser, которая делает PATCH запрос на сервер, чтобы изменить определенные данные у юзера по id
// Добавить обработку ошибки, если юзера с данным id не существует

const editUser = (id, data) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/users/${id}`, options).then(res =>
    res.ok ? res.json() : Promise.reject(new Error(res.statusText)),
  );
};

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

const updateUser = (id, data) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}/users/${id}`, options).then(res =>
    res.ok ? res.json() : Promise.reject(new Error(res.statusText)),
  );
};

// index.js

const userIdToUpdate = 3;
const updateData = {
  id: '55',
  first_name: 'Angela',
  email: 'ang@lines.com',
};

// updateUser(userIdToUpdate, updateData)
//   .then(user => {
//     console.log(user);
//     return getUsers();
//   })
//   .then(console.log)
//   .catch(err => console.log(err.message));

// *******************************

// PATCH
// data = {
//   ...data,
//   ...updateData,
// };

// // PUT
// data = {
//   id: data.id,
//   ...updateData,
// };

// ********************* DELETE  ********************* //

// Написать функцию deleteUser, которая делает DELETE запрос на сервер, чтобы удалить юзера по id
// Добавить обработку ошибки, если юзера с данным id не существует

const deleteUser = id => {
  return fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' }).then(res =>
    res.ok ? res.json() : Promise.reject(new Error(res.statusText)),
  );
};

// index.js
// deleteUser(7)
//   .then(deletedUser => {
//     console.log(deletedUser);
//     return getUsers();
//   })
//   .then(console.log)
//   .catch(err => console.log(err.message));

// ************************************************** //

export { getUsers, getUserById, saveUser, editUser, updateUser, deleteUser };
