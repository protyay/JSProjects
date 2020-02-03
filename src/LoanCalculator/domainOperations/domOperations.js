const domOperations = {
  createTableBodyData(monPayment, intRate, totInterest, parentNode) {
    const monPaymentdataCellElement = this.createTableData();
    monPaymentdataCellElement.innerText = monPayment;
    parentNode.appendChild(monPaymentdataCellElement);
    const interestRateTableDataCellElement = this.createTableData();
    interestRateTableDataCellElement.innerText = intRate;
    parentNode.appendChild(interestRateTableDataCellElement);
    const totInterestDataCellElement = this.createTableData();
    totInterestDataCellElement.innerText = totInterest;
    parentNode.appendChild(totInterestDataCellElement);
    this.hideLoaderDiv();
    this.showResultDiv();

    this.clearInputFields(monPayment, intRate, totInterest);
  },
  createTableData() {
    const td = document.createElement('td');
    td.setAttribute('scope', 'row');
    td.classList.add('text-info');
    return td;
  },

  showErrorMessage(errorMessage) {
    const cardDiv = document.querySelector('div#main');
    const header = document.querySelector('h1.heading');
    const alertDivElement = document.createElement('div');
    alertDivElement.className = 'alert alert-danger';
    alertDivElement.appendChild(document.createTextNode(errorMessage));

    cardDiv.insertBefore(alertDivElement, header);
    setTimeout(this.hideErrorAlert, 1209);
  },
  showLoaderDiv() {
    const loaderDiv = document.querySelector('div#preloader');
    loaderDiv.style.display = 'block';
  },

  hideLoaderDiv() {
    const loaderDiv = document.querySelector('div#preloader');
    loaderDiv.style.display = 'none';
  },
  hideErrorAlert() {
    const errorAlert = document.querySelector('div.alert.alert-danger');
    errorAlert.style.display = 'none';
  },
  showResultDiv() {
    const resultDiv = document.querySelector('div#result');
    resultDiv.style.display = 'block';
  },
};

export {
  domOperations as default,
};
