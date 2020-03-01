console.log('Inside index js');

document.querySelector('#nobel-data-btn').addEventListener('click', (evt) => {
  console.log(evt.target);
  const uri = 'http://api.nobelprize.org/v1/prize.json';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', uri, true);

  // eslint-disable-next-line func-names
  xhr.onload = function () {
    if (this.status === 200) {
      const responseMessage = JSON.parse(this.responseText);
      console.log(responseMessage);
      // List down all the unique properties from the response JSON
      const firstNobel = Object.keys(responseMessage.prizes[0]);
      const tableHeaderRow = document.querySelector('.thead-light > tr');

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < firstNobel.length; ++i) {
        const dataCellElement = document.createElement('th');
        dataCellElement.setAttribute('scope', 'col');
        dataCellElement.innerText = firstNobel[i];
        tableHeaderRow.appendChild(dataCellElement);
      }
      console.log(firstNobel);
    }
  };
  xhr.send();
});
