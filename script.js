// Sample book data
const books = [
  { title: "Book1", author: "Author1", quantity: 5 },
  { title: "Book2", author: "Author2", quantity: 3 },
  { title: "Book3", author: "Author3", quantity: 7 },
  { title: "Book4", author: "Author5", quantity: 23 },
  { title: "Book6", author: "Author4", quantity: 7 }
];

const bookList = document.getElementById("book-list");
const addBookForm = document.getElementById("add-book-form");

// Display books in the table
function displayBooks() {
  bookList.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const row = `<tr>
                  <td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.quantity}</td>
                  <td><button onclick="removeBook(${i})">Remove</button></td>
                </tr>`;
    bookList.innerHTML += row;
  }
}

// Add a new book
function addBook(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const quantity = document.getElementById("quantity").value;
  const newBook = { title, author, quantity };
  books.push(newBook);
  displayBooks();
  addBookForm.reset();
}

// Remove a book
function removeBook(index) {
  books.splice(index, 1);
  displayBooks();
}

// Event listeners
addBookForm.addEventListener("submit", addBook);

// Initial display of books
displayBooks();

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
// Close icon element
const closeIcon = document.getElementById("close-icon");

// Event listener for close icon
closeIcon.addEventListener("click", function() {
  window.close(); // Close the current window
});
// Cancel button element
const cancelButton = document.getElementById("cancel-button2");

// Event listener for cancel button
cancelButton.addEventListener("click", function() {
  const loginForm = document.getElementById("form login_form");
  loginForm.style.display = "none"; 
  loginForm.close();// Hide the login form
});
