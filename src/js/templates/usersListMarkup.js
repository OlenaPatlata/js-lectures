const createUsersListMarkup = users => users.map(makeUserMarkup).join('');

const makeUserMarkup = ({ avatar_url, id, login, html_url }) => `
  <tr>
    <table>
      <tr class='table-info'>
        <th>Avatar: &emsp;</th>
        <td>
          <img src=${avatar_url} alt='User avatar' width='100' />
        </td>
      </tr>
      <tr><th>User id: &emsp;</th><td>${id}</td></tr>
      <tr><th>Login: &emsp;</th><td>${login}</td></tr>
      <tr>
        <th>GitHub Page: &emsp;</th>
        <td><a href=${html_url}>${html_url}</a></td>
      </tr>
    </table>
  </tr>`;

export default createUsersListMarkup;
