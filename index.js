

const dialog = document.querySelector("dialog")
const showButton = document.querySelector("dialog + button")
const closeButton = document.querySelector("dialog button")
const addBook = document.querySelector("#addBook")

showButton.addEventListener("click", () => {
    dialog.showModal()
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

const bookshelf = document.querySelector(".library");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function libraryRefresh() {
        bookshelf.innerHTML = ""
    for (let i = 0; i < library.length; i++) {
     
    
        books = i.toString();
        
        const card = document.createElement("div")
        card.classList.add("card")
    
        const p = document.createElement("p")
        const p2 = document.createElement("p")
    
        p.textContent = `by ${library[i].author} with ${library[i].pages} pages.`
    
        const h2 = document.createElement("h2")
        const displayTitle = document.createTextNode(library[i].title)
        
        var readStatus = ""

        if (library[i].read == false) {
            
                    readStatus = document.createTextNode(`It has not been read.`)
        } else {
            readStatus = document.createTextNode(`It has been read.`)
        }
    
        const deleteBook = document.createElement("div")
        deleteBook.classList.add("deleteBook")
        deleteBook.textContent = "X"
        deleteBook.addEventListener("click", (e) => {
            const targetedBook = e.target.id;
            library.splice(targetedBook, 1)
            libraryRefresh()
        })

        const checkMark = document.createElement("div");
        checkMark.classList.add("checked");
        checkMark.textContent = "✓"
        
        checkMark.addEventListener("click", (e) => {
            const book = i;
            library[book].read = !library[book].read;
            libraryRefresh()
        })
        checkMark.style.color = library[i].read ? "green" : "red"

        p2.classList.add("p2")
        
        p2.appendChild(readStatus)
    
        h2.appendChild(displayTitle)
    
        card.appendChild(h2)
    
        card.appendChild(p)
        
        card.appendChild(p2)

        card.appendChild(deleteBook)
        
        card.appendChild(checkMark)
    
        bookshelf.appendChild(card)
       
    }
        }
    

const library = [];



function addToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
 library.push(book)
 libraryRefresh()
}



console.log(library)




    addBook.addEventListener("click", (e) => {
        e.preventDefault();
        const titleInput = document.getElementById("title")
        const authorInput = document.getElementById("author")
        const pagesInput = document.getElementById("pages")
        const readInput = document.getElementById("read")

        const title = titleInput.value
        const author = authorInput.value;
        const pages = pagesInput.value;
        const read = readInput.checked;  



        addToLibrary(title, author, pages, read)
                dialog.close();
        titleInput.value = ""
        authorInput.value = ""
        pagesInput.value = ""
        readInput.checked = false
    })

    const deleteEntry = document.getElementsByClassName("deleteBook")






    
addToLibrary("The Hobbit", "J.R.R. Tolkein", 300, false)
addToLibrary("3 Body Problem", 'Liu Cixin', 400, false)
addToLibrary("The Fellowship of the Ring", "J.R.R. Tolkein", 400, true)

