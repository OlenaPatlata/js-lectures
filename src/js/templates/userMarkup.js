const createUserMarkup = ({
  avatar_url,
  name,
  location,
  bio,
  public_repos,
  followers,
  blog,
  html_url,
}) => `<table>
  <tbody>
    <tr>
      <th>Avatar: &emsp;</th>
      <td>
        <img src='${avatar_url}' alt='User avatar' width='100' />
      </td>
    </tr>
    <tr><th>User name: &emsp;</th><td>${name}</td></tr>
    <tr><th>Location: &emsp;</th><td>${location}</td></tr>
    <tr><th>Bio: &emsp;</th><td>${bio}</td></tr>
    <tr><th>Public repos: &emsp;</th><td>${public_repos}</td></tr>
    <tr><th>Followers: &emsp;</th><td>${followers}</td></tr>
    <tr>
      <th>Blog: &emsp;</th><td><a href='${blog}'>${blog}</a></td>
    </tr>
    <tr>
      <th>GitHub Page: &emsp;</th>
      <td><a href='${html_url}'>${html_url}</a></td>
    </tr>
  </tbody>
</table>`;

export default createUserMarkup;
