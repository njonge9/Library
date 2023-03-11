let mylibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookDetails = function() {
        console.log(`This is ${title } written by ${author} and has ${pages} pages ${read} i have read it.`)
    }
}

const student1 = new Book('Odin book', 'Njonge Fred', '295', 'yes')
console.log(student1.bookDetails())

function addBookToLibrary(){
    
}