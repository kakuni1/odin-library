const myLibrary = [];

function Book(title, id, authorNameLast, authorNameFirst) {
  this.title = title;
  this.id = id;
  this.authorNameLast = authorNameLast;
  this.authorNameFirst = authorNameFirst;

  this.printTitle = function () {
    return `title: ${this.title} \nby: ${this.authorNameFirst} ${this.authorNameLast} \nid: id${this.id}`;
  };
}

const bookFirstEntry = new Book(
  "Book of John",
  crypto.randomUUID(),
  "Doe",
  "John",
);
const bookSecondEntry = new Book(
  "Book of Jane",
  crypto.randomUUID(),
  "Doe",
  "Jane",
);
const bookThirdEntry = new Book(
  "Book of Smith",
  crypto.randomUUID(),
  "Smith",
  "John",
);

myLibrary[0] = bookFirstEntry;
myLibrary[1] = bookSecondEntry;
myLibrary[2] = bookThirdEntry;

const shelf = document.querySelector(".shelf");
const div = document.createElement("div");
div.className = "book";
document.querySelector(".shelf").appendChild(div);

const dialog = document.getElementById("open-window");
const openWindow = document.getElementById("add-book-icon");
const closeWindow = document.getElementById("close-window");

openWindow.addEventListener("click", () => {
  dialog.showModal();
});

closeWindow.addEventListener("click", () => {
  dialog.close();
});

myLibrary.forEach((book) => {
  const bookDiv = document.createElement("div");
  const bookPara = document.createElement("p");

  bookPara.textContent = `Title: ${book.title}\nAuthor: ${book.authorNameFirst} ${book.authorNameLast}`;
  bookDiv.appendChild(bookPara);

  document.querySelector(".book").appendChild(bookDiv);
});
