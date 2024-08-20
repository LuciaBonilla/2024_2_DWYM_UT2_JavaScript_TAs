// -> VARIABLES GLOBALES
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
// Elementos del HTML.
const inputBookTitle = document.getElementById("input-bookTitle");
const inputBookAuthor = document.getElementById("input-bookAuthor");
const buttonAddBook = document.getElementById("button-addBook");
const outputBooks = document.getElementById("output-books");
const outputBookTitles = document.getElementById("output-bookTitles");

// -> FUNCIONES
function getBookTitles() {
    let titles = "";
    for (let i = 0; i < books.length; i++) {
        titles += books[i].title + "<br>";
    }
    return titles;
}

function getBooksInfo() {
    // La etiqueta <pre></pre> para respetar los espacios en blanco.
    let info = "<pre>";
    for (let i = 0; i < books.length; i++) {
        info += "TÍTULO: " + books[i].title.padEnd(20, " ") + " AUTOR: " + books[i].author + "\n";
    }
    info += "</pre>";
    return info;
}

function addBook(title, author) {
    books.push({ title: title, author: author });
}

function showBooksInfo() {
    outputBooks.innerHTML = getBooksInfo();
}

function showBookTitles() {
    outputBookTitles.innerHTML = getBookTitles();
}

// Ejecuta una vez inicialmente para mostrar los libros del código.
showBooksInfo();
showBookTitles();

// -> EVENTOS
buttonAddBook.addEventListener("click", function () {
    addBook(inputBookTitle.value, inputBookAuthor.value);
    showBooksInfo();
    showBookTitles();
});