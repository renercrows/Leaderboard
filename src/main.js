const errorMsg = document.querySelector('#message');
const refreshBtn = document.getElementById('reload-page');

refreshBtn.addEventListener('click', () => document.location.reload());

class BookForm {
  constructor() {
    this.books = [
      {
        Name: 'Example Book',
        Score: 'Example Author',
      },
      {
        Name: 'Another Example Book',
        Score: 'Another Author',
      },
    ];
  }

  genHTML() {
    const htmlString = `
      <tr>
        <td>
          <article class="book-card">
            <p class="book-title"></p>
            <p class="book-author"></p>
            <button class="book-btn">Remove</button>
          </article>
        </td>
      </tr>
      `;
    for (let i = 0; i < this.books.length; i += 1) {
      document.getElementById('book-form').innerHTML += htmlString;
      const name = document.querySelectorAll('.book-title');
      const score = document.querySelectorAll('.book-author');
      const button = document.querySelectorAll('.book-btn');
      if (this.books[i].score === '') {
        score[i].innerHTML = 'Unknown';
        errorMsg.innerHTML = 'Score was set as "Unknown"';
      } else {
        score[i].innerHTML = `${this.books[i].score}`;
        errorMsg.innerHTML = '';
      }
      name[i].innerHTML = `${this.books[i].name}:`;
      button[i].setAttribute('onclick', `bookForm.removeBook(${i})`);
    }
    document.querySelector('#empty-list').innerHTML = 'Recent scores';
  }

  addBook(name, score) {
    const bookData = {
      name,
      score,
    };
    this.books.push(bookData);
    const bookList = JSON.stringify(this.books);
    localStorage.setItem('Books', bookList);
    document.querySelector('#empty-list').innerHTML = '';
    document.querySelector('#invitation').innerHTML = '';
  }

  reload() {
    if (localStorage.getItem('Books')) {
      const oldStorage = localStorage.getItem('Books');
      const newStorage = JSON.parse(oldStorage);
      document.getElementById('book-form').innerHTML = '';
      this.books = newStorage;
      this.genHTML();
    } else {
      this.genHTML();
    }
  }

  removeBook(num) {
    this.books.splice(num, 1);
    const bookList = JSON.stringify(this.books);
    localStorage.setItem('Books', bookList);
    this.reload();
  }
}

const bookForm = new BookForm();
window.onload = bookForm.reload();

const form = document.forms[0];
const names = document.querySelector('#title');
const score = document.querySelector('#author');
const addBtn = document.querySelector('#button');
addBtn.addEventListener('click', () => {
  if (names.value === '') {
    errorMsg.style.color = '#f00';
    errorMsg.innerHTML = 'Name required';
    document.forms[0][0].style.borderColor = '#f00';
  } else {
    bookForm.addBook(names.value, score.value);
    bookForm.reload();
    errorMsg.style.color = '#000';
    form[0].style.borderColor = '#000';
    form.reset();
  }
});
