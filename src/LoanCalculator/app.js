import domOperations from './domainOperations/domOperations.js';

const principalLoanAmt = document.querySelector('input#loan-amount');
const interestRate = document.querySelector('input#loan-interest');
const repaymentMonths = document.querySelector('input#loan-repayment-time');
const loanFormSubmitBtn = document.querySelector('#loan-form-submit');
const resultTableBody = document.querySelector('#result-table > tbody > tr');
// const resultDiv = document.getElementById('result');

const interestCalculator = {
  getMonthlyPayment(months, amount, interest) {
    return this.getTotalPayment(months, amount, interest) / 12;
  },
  getTotalPayment(months, amount, interest) {
    const totalPayment = amount * (1 + (interest / 12) * months);
    return totalPayment;
  },
  getTotalInterestPaid(months, amount, interest) {
    const totalInterestPaid = this.getTotalPayment(months, amount, interest) - amount;
    return totalInterestPaid;
  },
};
loanFormSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (interestRate.value === '' || repaymentMonths.value === '' || principalLoanAmt.value === '') {
    console.log('Please enter all Values to calculate ');
  } else {
    // We have all the values to calculate
    const monthlyPayment = interestCalculator.getMonthlyPayment(repaymentMonths.value,
      principalLoanAmt.value, interestRate.value);
    console.log(monthlyPayment);

    const totalPayment = interestCalculator.getTotalPayment(repaymentMonths.value,
      principalLoanAmt.value, interestRate.value);
    console.log(totalPayment);

    const totalInterestPayment = interestCalculator.getTotalInterestPaid(repaymentMonths.value,
      principalLoanAmt.value, interestRate.value);
    console.log(totalInterestPayment);

    domOperations.createTableBodyData(monthlyPayment, totalPayment, totalInterestPayment,
      resultTableBody);
    // resultDiv.style.display = 'block';
  }
});


/*
loanFormSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log('CLicked');
  console.log(`Values are ${principalLoanAmt.value} and interest rate ${interestRate.value}`);
})
*/
