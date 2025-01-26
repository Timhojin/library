let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addNewBook() {
    const form = document.querySelector('#form');
    form.style.display = 'block';
}

document.querySelector('#submit').addEventListener('click', function() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#status').value;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#status').value = '';
    render();
    document.querySelector('#form').style.display = 'none';
});

function render() {
    const table = document.querySelector('#myTable');
    table.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Status</th>
            <th></th>
        </tr>
    `;

    myLibrary.forEach((book, index) => {
        const row = table.insertRow(-1);
        const title = row.insertCell(0);
        const author = row.insertCell(1);
        const pages = row.insertCell(2);
        const read = row.insertCell(3);
        const remove = row.insertCell(4);

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.innerHTML = `<button onclick="changeStatus(${index})">${book.read}</button>`;
        read.style = 'text-align: center; width: 100px;';
        remove.innerHTML = `<button onclick="removeBook(${index})">Remove</button>`;
        remove.style = 'text-align: center; width: 100px;';	
    });
}

function changeStatus(index) {
    myLibrary[index].read = myLibrary[index].read === 'read' ? 'not read' : 'read';
    render();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

document.querySelector('#new-book').addEventListener('click', addNewBook);