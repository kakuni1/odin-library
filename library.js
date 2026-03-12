const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.printTitle = function () {
    return `title: ${this.title}, by: ${this.author}`;
  };
}
