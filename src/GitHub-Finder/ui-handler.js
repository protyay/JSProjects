class GitHubFinderUI {
  static showProfile(userProfile) {
    console.log(userProfile);
    const profile = document.getElementById('profile');
    // Remove any warnings if present
    if (document.querySelector('div.alert-heading') !== null) {
      document.querySelector('div.alert-heading').remove();
    }
    profile.innerHTML = `
       <div class="card card-body">
       <div class="row">
       

         <div class="col-md-3">
         <img class="img-fluid mb-3" src="${userProfile.avatar_url}" alt="profile"/>
         <button class="btn btn-primary btn-block" href="${userProfile.html_url}">View Profile</button>
        </div>
        <div class="col-md-9 mb-3">
            <span class="badge badge-primary">Public repos: ${userProfile.public_repos}</span>
            <span class="badge badge-secondary">Public gists: ${userProfile.public_gists}</span>
<span class="badge badge-success">Followers : ${userProfile.followers}</span>
<span class="badge badge-info">Following: ${userProfile.following}</span>
<span class="badge badge-warning">Member since : ${Date.parse(userProfile.created_at)}</span>

<br/>
<ul class="list-group">
<li class="list-group-item">Company: ${userProfile.company}</li>
<li class="list-group-item">Blog: ${userProfile.blog}</li>
<li class="list-group-item">Name: ${userProfile.name}</li>
<li class="list-group-item">Location: ${userProfile.location}</li>
</ul>
        </div>
        </div>
        </div>
        `;
  }

  static showAlert(errorMsg) {
    if (document.querySelector('div.alert-heading') === null) {
      const searchUserDiv = document.querySelector('div.container');

      const warningMsgDiv = document.createElement('div');
      warningMsgDiv.setAttribute('class', 'alert-heading alert-warning');
      warningMsgDiv.innerText = errorMsg;
      searchUserDiv.appendChild(warningMsgDiv);
    }
  }

  static displayUserRepos(reposData) {
    const reposDiv = document.querySelector('#repos');
    reposDiv.innerHTML = '';
    reposData.forEach((repo) => {
      reposDiv.innerHTML += `
           <div class="card card-body">
                <div class="row">
                   <div class="col-md-6">
                       <a href="${repo.html_url}">${repo.name}</a>
                   </div>
                  <div class="col-md-6">
                            <span class="badge badge-success">Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-info">Forks Count: ${repo.forks}</span>
                            <span class="badge badge-warning">Created at: ${repo.created_at}</span>         
                  </div>
                </div>
           </div>
    `;
    });
  }
}
