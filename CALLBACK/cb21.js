/*Create a book class with title, author, and ISBN, and a library class to add/remove books
and display the catalog. */
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class Library {
  constructor() {
    this.catalog = [];
  }
  addBook(book) {
    this.catalog.push(book);
  }
  removeBook(isbn) {
    this.catalog = this.catalog.filter(b => b.isbn !== isbn);
  }
  displayCatalog() {
    this.catalog.forEach(b => {
      console.log(b.title + " - " + b.author + " (" + b.isbn + ")");
    });
  }
}
// creating books
let book1 = new Book("Harry Potter", "J.K. Rowling", "111");
let book2 = new Book("Atomic Habits", "James Clear", "222");
// library object
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.displayCatalog();
library.removeBook("111");
library.displayCatalog();