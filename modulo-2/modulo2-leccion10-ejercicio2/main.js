'use strict';
let username = document.querySelector('.username');
let button = document.querySelector('.btn');
function getUser() {
  let githubUser = username.value;
  fetch(`https://api.github.com/users/${githubUser}`).then((response) =>
    response.json().then((kiwiloco) => {
      const img = document.querySelector('.avatar');
      const name = document.querySelector('.name');
      const repositories = document.querySelector('.repositories');
      img.src = kiwiloco.avatar_url;
      name.innerHTML = kiwiloco.name;
      repositories.innerHTML = kiwiloco.public_repos;
      //return data;
    })
  );
}
button.addEventListener('click', getUser);
