console.log('Inside index js');

function UI() {
}

function DOM() {
  const bookAuthorSelector = '#book-author';
  const bookISBNSelector = '#book-isbn';
  const bookNameSelector = '#book-name';
  const h6 = '.h6';

  return {
    bookAuthorSelector, bookISBNSelector, bookNameSelector, h6,
  };
}

const dom = DOM();

function Book(name, author, isbn) {
  this.name = name;
  this.author = author;
  this.isbn = isbn;
}

// eslint-disable-next-line func-names
UI.prototype.getDOMValue = function (queryString) {
  const domVal = document.querySelector(queryString);
  if (domVal === 'undefined' || domVal === null) {
    return '';
  }
  return domVal;
};

// eslint-disable-next-line func-names,no-unused-vars
UI.prototype.addBookList = function (book) {
  const htmlTBody = this.getDOMValue('#result-body');
  console.log(htmlTBody.childNodes.length);
  const row = document.createElement('tr');
  row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><i class="fa fa-trash"></i></td>
  `;

  htmlTBody.appendChild(row);
  this.clearFields();
  this.showAlert(`Book ${book.name} has been added`, 'alert-success');
};

// eslint-disable-next-line func-names
UI.prototype.clearFields = function () {
  this.getDOMValue('#book-author').value = '';
  this.getDOMValue('#book-name').value = '';
  this.getDOMValue('#book-isbn').value = '';
};
// eslint-disable-next-line func-names
UI.prototype.isEmptyValue = function (selector) {
  return this.getDOMValue(selector) === '';
};

// eslint-disable-next-line func-names
UI.prototype.showAlert = function (message, alertClass) {
  const innerHTML = `
<h2 class="heading display-6 pb-1 h6">
<div class="alert ${alertClass}" role="alert">
${message}
</div>
</h2>
`;
    // Select h1 element
  const heading1 = document.querySelector('.h1');
  heading1.insertAdjacentHTML('afterend', innerHTML);
  setTimeout(() => this.hideAlert(), 1450);
};

// eslint-disable-next-line func-names
UI.prototype.hideAlert = function () {
  const alertDOM = this.getDOMValue(dom.h6);
  alertDOM.style.display = 'none';
};


document.getElementById('result-body').addEventListener('click', (e) => {
  console.log(e);
  const ui = new UI();
  // Find the class from the event target
  if (e.target.classList.contains('fa-trash')) {
    // Find the parent <tr> element and remove it
    e.target.parentElement.parentElement.remove();
    ui.showAlert('Record has been removed', 'alert-info');
  }
});


document.getElementById('book-form-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const bookAppUI = new UI();

  const bookAuthorInput = bookAppUI.getDOMValue(dom.bookAuthorSelector).value;
  const bookNameInput = bookAppUI.getDOMValue(dom.bookNameSelector).value;
  const bookIsbnInput = bookAppUI.getDOMValue(dom.bookISBNSelector).value;
  if (bookAuthorInput === '' || bookNameInput === '' || bookIsbnInput === '') {
    bookAppUI.showAlert('Please enter all fields to proceed', 'alert-warning');
  } else {
    console.log(bookAuthorInput, bookIsbnInput, bookNameInput);
    const newBook = new Book(bookNameInput, bookAuthorInput, bookIsbnInput);
    bookAppUI.addBookList(newBook);
  }
});
