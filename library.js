const myLibrary = [];

const shelf = document.querySelector(".shelf");
const div = document.createElement("div");
div.className = "book";
document.querySelector(".shelf").appendChild(div);

const dialog = document.getElementById("open-window");
const openWindow = document.getElementById("add-book-icon");
const closeWindow = document.getElementById("close-window");
const submit = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", () => {
  Book.createInitialLibrary();
});

openWindow.addEventListener("click", () => {
  dialog.showModal();
});

closeWindow.addEventListener("click", () => {
  dialog.close();
});

submit.addEventListener("click", () => {
  dialog.close();
});

function Book(
  title,
  id,
  authorNameLast,
  authorNameFirst,
  pageNumber,
  readStatus,
) {
  this.title = title;
  this.id = id;
  this.pageNumber = pageNumber;
  this.authorNameLast = authorNameLast;
  this.authorNameFirst = authorNameFirst;
  this.readStatus = readStatus;
}

Book.createInitialLibrary = function () {
  const bookFirstEntry = new Book(
    "Book of John",
    crypto.randomUUID(),
    "Doe",
    "John",
    "123",
    false,
  );
  const bookSecondEntry = new Book(
    "Book of Jane",
    crypto.randomUUID(),
    "Doe",
    "Jane",
    "133",
    false,
  );
  const bookThirdEntry = new Book(
    "Book of Smith",
    crypto.randomUUID(),
    "Smith",
    "John",
    "245",
    true,
  );
  myLibrary[0] = bookFirstEntry;
  myLibrary[1] = bookSecondEntry;
  myLibrary[2] = bookThirdEntry;
  renderLibrary();
};

function addBookToLibrary() {
  const bookTitle = document.getElementById("book-title");
  const authorNameLast = document.getElementById("author-last-name");
  const authorNameFirst = document.getElementById("author-first-name");
  const titleInput = bookTitle.value;
  const nameLastInput = authorNameLast.value;
  const nameFirstInput = authorNameFirst.value;
  const pageNumber = pageNumber.value;
  const readStatus = readStatus.value;

  myLibrary.push(
    new Book(
      titleInput,
      crypto.randomUUID(),
      nameLastInput,
      nameFirstInput,
      pageNumber,
      readStatus,
    ),
  );

  renderLibrary();
}

function renderLibrary() {
  document.querySelector(".book").innerHTML = "";
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    const bookPara = document.createElement("p");

    bookPara.textContent = `Title: ${book.title}\nAuthor: ${book.authorNameFirst} ${book.authorNameLast}\n`;
    if (book.readStatus === false)
      bookPara.textContent += `Page #: ${book.pageNumber}\n`;
    else if (book.readStatus === true) bookPara.textContent += `✔`;
    bookDiv.setAttribute("class", "book-card");
    bookDiv.setAttribute("data-id", book.id);
    bookDiv.appendChild(bookPara);

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "remove-book-icon");
    svg.setAttribute("height", "40px");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "40px");
    svg.setAttribute("fill", "#393836");
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
      "d",
      "m251.33-198.29-53.04-53.04L426.96-480 198.29-708.67l53.04-53.04L480-533.04l228.67-228.67 53.04 53.04L533.04-480l228.67 228.67-53.04 53.04L480-426.96 251.33-198.29Z",
    );
    svg.appendChild(path);

    document.querySelector(".book").appendChild(bookDiv);
    bookDiv.appendChild(svg);

    bookDiv.addEventListener("click", () => {
      const bookId = bookDiv.getAttribute("data-id");
      const book = myLibrary.find((b) => b.id === bookId);
      if (book) {
        book.readStatus = !book.readStatus;
        renderLibrary();
      }
    });

    svg.addEventListener("click", () => {
      const bookId = bookDiv.getAttribute("data-id");
      const book = myLibrary.find((b) => b.id === bookId);
      if (book) {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        renderLibrary();
      }
    });
  });
  console.log(myLibrary);
}
