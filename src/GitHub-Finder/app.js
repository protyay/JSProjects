const userNameInpField = document.getElementById('input-username');

userNameInpField.addEventListener('keyup', (ev) => {
  const userName = ev.target.value;
  console.log(`Entered text is ${userName}`);
  // eslint-disable-next-line no-undef
  const gitHubAccess = new GithubAccess();
  // const gitHubFinderUI = new GitHubFinderUI();

  if (userName !== '') {
    gitHubAccess.getUser(userName);
    // eslint-disable-next-line brace-style
  }
  // eslint-disable-next-line no-empty
  else {
    // eslint-disable-next-line no-undef
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = '';
    if (document.querySelector('div.alert-heading') !== null) {
      document.querySelector('div.alert-heading').remove();
    }
  }
});
