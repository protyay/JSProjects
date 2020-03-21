console.log('Inside app.js');
document.querySelector('#json-btn').addEventListener('click', () => {
  console.log('Button clicked');
  // We will do this with XHR API
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(`Done! Got ${xhr.response.length} bytes from the API`);
      const jsonResponse = JSON.parse(xhr.responseText);
      console.log(jsonResponse);
    }
  };
  xhr.send();
});
document.querySelector('#json-btn1').addEventListener('click', () => {
  console.log('Button clicked');
  // We will do this with FETCH API - the new standard
  fetch('https://api.github.com/users')
    .then((value) => value.json())
    .then((data) => console.log(data))
    .catch((reason) => console.log(`Error reason is ${reason}`));
});
// Async await API
async function getGitHubUsers() {
  const userFetch = await fetch('https://api.github.com/users');
  const response = await userFetch.json();
  return response;
}
document.querySelector('#json-btn2').addEventListener('click', () => {
  console.log('Button clicked btn 2');
  // We will do this with FETCH API - and async await function
  getGitHubUsers().then((value) => console.log(value));
});
