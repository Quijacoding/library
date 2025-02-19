function newBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// hobbit = new book("The Hobbit", "Tolkein", 5, "read")



const library = [];

function addToLibrary(title, author, pages, read) {
    book = new newBook(title, author, pages, read)
    return library.push(book)
}

addToLibrary("The Hobbit", "J.R.R. Tolkein", 5, "read")
addToLibrary("3 Body Problem", 'Ci', 2424, "not read")
addToLibrary("The Fellowship of the Ring", "J.R.R. Tolkein", 300, "read")



console.log(library)

    const bookshelf = document.querySelector(".library");


for (let i = 0; i < library.length; i++) {
 


    books = i.toString();
    
    const card = document.createElement("div")
    card.classList.add("card")

    const p = document.createElement("p")
    const p2 = document.createElement("p")

    p.textContent = `by ${library[i].author} with ${library[i].pages} pages.`

    const h2 = document.createElement("h2")
    const displayTitle = document.createTextNode(library[i].title)
    const readStatus = document.createTextNode(`It has been ${library[i].read}.`)

    p2.classList.add("p2")
    
    p2.appendChild(readStatus)

    h2.appendChild(displayTitle)

    card.appendChild(h2)

    card.appendChild(p)
    
    card.appendChild(p2)

    bookshelf.appendChild(card)
   
    console.log(books)
}