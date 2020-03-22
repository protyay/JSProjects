const userNameInpField = document.getElementById('input-username');

userNameInpField.addEventListener('keyup', (ev) => {
  const userName = ev.target.value;
  console.log(`Entered text is ${userName}`);
  const gitHubAccess = new GithubAccess();
  // const gitHubFinderUI = new GitHubFinderUI();

  if (userName !== '') {
    // This is using the fetch API
    gitHubAccess.getUser(userName);
    const userRepos = gitHubAccess.getUserRepos(userName);
    userRepos
      .then((data) => {
        console.log(data.repoJsonResponse);
        GitHubFinderUI.displayUserRepos(data.repoJsonResponse);
      })
      .catch((error) => console.log(error));
  } else {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = '';
    if (document.querySelector('div.alert-heading') !== null) {
      document.querySelector('div.alert-heading').remove();
    }
  }
});
