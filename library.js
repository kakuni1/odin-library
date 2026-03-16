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
  pageCountTotal,
  readStatus,
) {
  this.title = title;
  this.id = id;
  this.pageNumber = pageNumber;
  this.pageCountTotal = pageCountTotal;
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
    "245",
    "no",
  );
  const bookSecondEntry = new Book(
    "Book of Jane",
    crypto.randomUUID(),
    "Doe",
    "Jane",
    "133",
    "257",
    "no",
  );
  const bookThirdEntry = new Book(
    "Book of Smith",
    crypto.randomUUID(),
    "Smith",
    "John",
    "245",
    "260",
    "no",
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

  myLibrary.push(
    new Book(titleInput, crypto.randomUUID(), nameLastInput, nameFirstInput),
  );

  renderLibrary();
}

function renderLibrary() {
  document.querySelector(".book").innerHTML = "";
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    const bookPara = document.createElement("p");

    bookPara.textContent = `Title: ${book.title}\nAuthor: ${book.authorNameFirst} ${book.authorNameLast}\n`;
    bookPara.textContent += `Page #: ${book.pageNumber}/${book.pageCountTotal}\n`;
    bookPara.textContent += `Read: ${book.readStatus}`;
    bookDiv.setAttribute("class", "book-card");
    bookDiv.setAttribute("data-id", book.id);
    bookDiv.appendChild(bookPara);

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "remove-book-icon");
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

    svg.addEventListener("click", () => {
      const id = bookDiv.getAttribute("data-id");

      for (let i = 0; i < myLibrary.length; i++) {
        if (id === myLibrary[i].id) {
          myLibrary.splice(myLibrary.indexOf(book), 1);
          renderLibrary();
        }
      }
    });
  });
  console.log(myLibrary);
}
