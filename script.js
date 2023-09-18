
const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function addBookToLibrary(){
    let title = document.querySelector("#title-name").value;
    let author = document.getElementById("author-name").value;
    let pages = document.getElementById("number-of-pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}

function render(){
    let libraryEl = document.querySelector("#library")
    libraryEl.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class","book-card")
        bookEl.innerHTML = `
        <div class = "card-header">
            <p class = "title">Title: ${book.title}</p>
            <p class = "author">Author: ${book.author}</p>
        </div>
        <div class = "card-body">
            <p>Number of pages: ${book.pages} pages</p>
            <p class = "read-status">Status: ${book.read ? "Read" : "Not Read Yet"}</p>
            <button class = "remove-btn" onclick = "removeBook(${i})"> Remove </button>
            <button class = "toggle-read-btn" onclick = "toggleRead(${i})"> Toggle Read </button>
        </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

let newBookbtn = document.querySelector("#new-book");
newBookbtn.addEventListener("click", function(){
    let newBookForm = document.querySelector("#myForm");
    newBookForm.style.display = "block";
})

document.querySelector("#myForm").addEventListener("submit",function(e){
    e.preventDefault();
    addBookToLibrary();
})