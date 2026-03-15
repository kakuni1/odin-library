const myLibrary = [];

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

submit.addEventListener("click", () => {
  dialog.close();
});

initialLibrary();

function Book(title, id, authorNameLast, authorNameFirst) {
  this.title = title;
  this.id = id;
  this.authorNameLast = authorNameLast;
  this.authorNameFirst = authorNameFirst;

  this.printTitle = function () {
    return `title: ${this.title} \nby: ${this.authorNameFirst} ${this.authorNameLast} \nid: id${this.id}`;
  };
}

function addBookToLibrary() {
  const bookTitle = document.getElementById("book-title");
  const authorNameLast = document.getElementById("author-last-name");
  const authorNameFirst = document.getElementById("author-first-name");
  const titleInput = bookTitle.value;
  const nameLastInput = authorNameLast.value;
  const nameFirstInput = authorNameFirst.value;

  document.querySelector(".book").innerHTML = "";
  myLibrary.push(
    new Book(titleInput, crypto.randomUUID(), nameLastInput, nameFirstInput),
  );
  renderLibrary();
}

function renderLibrary() {
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    const bookPara = document.createElement("p");

    bookPara.textContent = `Title: ${book.title}\nAuthor: ${book.authorNameFirst} ${book.authorNameLast}`;
    bookDiv.appendChild(bookPara);

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("id", "remove-book-icon");
    svg.setAttribute("height", "24px");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24px");
    svg.setAttribute("fill", "#c7c7c1");
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
      "d",
      "m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z",
    );
    svg.appendChild(path);

    document.querySelector(".book").appendChild(bookDiv);
    bookDiv.appendChild(svg);
  });
}

function initialLibrary() {
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

  renderLibrary();
}
