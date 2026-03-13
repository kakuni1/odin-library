const myLibrary = [];

function Book(title, author, id) {
  this.author = author;
  this.title = title;
  this.id = id;
  this.printTitle = function () {
    return `title: ${this.title} \nby: ${this.author} \nid: id${this.id}`;
  };
}

const bookA1 = new Book("a1", "author one", crypto.randomUUID());
const bookA2 = new Book("a2", "author two", crypto.randomUUID());
const bookB1 = new Book("b1", "author three", crypto.randomUUID());

console.log(bookA1.printTitle());
console.log(bookA2.printTitle());
console.log(bookB1.printTitle());
