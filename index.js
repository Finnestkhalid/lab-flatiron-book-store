const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
// Select the DOM element with id of "header"
const bookStoreTitle = document.querySelector('#header');

//  Change textContent to match the bookstore name
bookStoreTitle.textContent = bookStore.name;

// --- Step 3: Book Elements ---

// Select the ul element where we will append the books
// Note: Using 'book-list' to match your HTML ID exactly
const bookList = document.querySelector('#book-list');

// Optional: Remove the example "delete-this" li before adding new ones
const exampleLi = document.querySelector('#delete-this');
if (exampleLi) exampleLi.remove();

// Loop through every book in the array
bookStore.books.forEach(book => {
    
    //  Create elements for each book
    const bookContainer = document.createElement('li'); // li element
    const bookTitle = document.createElement('h3');     // h3 element
    const bookAuthor = document.createElement('p');      // p element
    const bookImage = document.createElement('img');    // img element

    //  Set the content to match the book object
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title; // Best practice for accessibility

    // Append book elements to bookContainer (the li)
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Append bookContainer to bookList (the ul)
    bookList.appendChild(bookContainer);
});
