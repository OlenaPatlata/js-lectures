export default users =>
  users
    .map(
      ({ id, icon, first_name, last_name, email }) => `
        <li class='list-item'>
            <div class='d-flex justify-content-between'>
              <h6 class='mb-3'>ID: ${id}</h6>
              <div class='img-wrapper'>
                <img src=${icon} alt='avatar' width='50' />
              </div>
            </div>
            <p><i>${first_name} ${last_name}</i></p>
            <h6>Email:</h6><p>${email}</p>
            <div class='actions-wrapper'>
              <button
                type='button'
                class='btn btn-outline-info'
                data-action='edit'
                data-id=${id}
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >Edit</button>
              <button
                type='button'
                class='btn btn-outline-secondary'
                data-action='delete'
                data-id=${id}
              >Delete</button>
            </div>
          </li>`,
    )
    .join('');
