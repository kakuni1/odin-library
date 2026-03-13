const myLibrary = [];

function Book(title, author, id) {
  this.author = author;
  this.title = title;
  this.id = id;
  this.printTitle = function () {
    return `title: ${this.title} \nby: ${this.author} \nid: id${this.id}`;
  };
}

const bookFirstEntry = new Book("a1", "author one", crypto.randomUUID());

myLibrary[0] = bookFirstEntry;
console.log(myLibrary[0]);

const container = document.querySelector(".container");
const div = document.createElement("div");
div.classList.add("library");
container.appendChild(div);
