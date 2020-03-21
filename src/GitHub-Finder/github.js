// eslint-disable-next-line no-unused-vars
class GithubAccess {
  constructor() {
    this.client_id = '3f8585c6294fbf0fa708';
    this.client_secret = '891749164a618d6397b568ed07e3a3640d80d14c';
    this.rootUri = 'https://api.github.com';
    this.usersEndpoint = `${this.rootUri}/users/`;
    this.authParam = `?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    // eslint-disable-next-line no-undef
    this.uiHandler = new GitHubFinderUI();
  }

  getUser(userName) {
    const userUrl = this.usersEndpoint + userName + this.authParam;
    // console.log(`Sending request to endpoint --> ${userUrl}`);
    fetch(userUrl)
      .then((value) => value.json())
      .then((response) => {
        if (response !== 'undefined' && response.message !== 'Not Found') {
          console.log(response);
          // eslint-disable-next-line no-undef
          GitHubFinderUI.showProfile(response);
        } else {
          console.log('Inside error callback in Fetch URI');
          // eslint-disable-next-line no-undef
          GitHubFinderUI.showAlert('No Profile available');
          const profileDiv = document.getElementById('profile');
          profileDiv.innerHTML = '';
        }
      })
    // eslint-disable-next-line no-undef
      .catch((error) => GitHubFinderUI.showAlert(error));
  }

  getFollowers(url) {
    fetch(url)
      .then((value) => value.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  }
}
