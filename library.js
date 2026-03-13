const myLibrary = [];

function Book(title, author, id) {
  this.author = author;
  this.title = title;
  this.id = id;
  this.printTitle = function () {
    return `title: ${this.title} \nby: ${this.author} \nid: id${this.id}`;
  };
}

const bookEntry = new Book("a1", "author one", crypto.randomUUID());

myLibrary[0] = bookEntry;
console.log(myLibrary[0]);
