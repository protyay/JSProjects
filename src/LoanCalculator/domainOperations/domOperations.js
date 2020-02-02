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
  },
  createTableData() {
    const td = document.createElement('td');


    td.setAttribute("scope","row");
    td.classList.add('text-info');
    return td;
  },

};

export {
  domOperations as default,
};
