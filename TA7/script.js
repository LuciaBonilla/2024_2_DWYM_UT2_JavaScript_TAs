// Variable global 'books'.
const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
];

function getBookTitles() {
    let titles = "";
    for (let i = 0; i < books.length; i++) {
        titles += books[i].title + "<br>";
    }
    return titles;
}

function addBook(title, author) {
    books.push({ title: title, author: author });
}

// Elementos del HTML.
const inputBookTitle = document.getElementById("input-bookTitle");
const inputBookAuthor = document.getElementById("input-bookAuthor");
const buttonAddBook = document.getElementById("button-addBook");
const buttonGetBookTitles = document.getElementById("button-getBookTitles");
const outputBookTitles = document.getElementById("output-bookTitles");

function showBookTitles() {
    outputBookTitles.innerHTML = getBookTitles(books);
}

buttonAddBook.addEventListener("click", () =>
    addBook(inputBookTitle.value, inputBookAuthor.value));

buttonGetBookTitles.addEventListener("click", () =>
    showBookTitles());