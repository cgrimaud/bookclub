
var books = [
    {
        title: "Extremely Loud and Incredibly Close",
        author: "Jonathan Safran Foer",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/0/05/Extremely_loud_and_incredibly_close_large.JPEG",
        meetUpDate: "12/12/2012",
        meetUpLocation: "Quills"
    },
    {
        title: "Children Playing Before a Statue of Hercules",
        author: "David Sedaris",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Children_Playing_Before_a_Statue_of_Hercules.jpg",
        meetUpDate: "01/18/2013",
        meetUpLocation: "Puccini's"
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Young Adult",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
        meetUpDate: "02/15/2013",
        meetUpLocation: "Amanda's House"
    },
    {
        title: "The Paris Wife",
        author: "Paula McLain",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Paris_Wife_book_cover.jpg",
        meetUpDate: "03/22/2013",
        meetUpLocation: "Carly's House"
    },
    {
        title: "Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
        meetUpDate: "06/07/2013",
        meetUpLocation: "Heine Brothers"
    },
    {
        title: "Extremely Loud and Incredibly Close",
        author: "Jonathan Safran Foer",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/0/05/Extremely_loud_and_incredibly_close_large.JPEG",
        meetUpDate: "12/12/2012",
        meetUpLocation: "Quills"
    },
    {
        title: "Children Playing Before a Statue of Hercules",
        author: "David Sedaris",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Children_Playing_Before_a_Statue_of_Hercules.jpg",
        meetUpDate: "01/18/2013",
        meetUpLocation: "Puccini's"
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Young Adult",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
        meetUpDate: "02/15/2013",
        meetUpLocation: "Amanda's House"
    },
    {
        title: "The Paris Wife",
        author: "Paula McLain",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Paris_Wife_book_cover.jpg",
        meetUpDate: "03/22/2013",
        meetUpLocation: "Carly's House"
    },
    {
        title: "Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
        meetUpDate: "06/07/2013",
        meetUpLocation: "Heine Brothers"
    },
    {
        title: "Extremely Loud and Incredibly Close",
        author: "Jonathan Safran Foer",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/0/05/Extremely_loud_and_incredibly_close_large.JPEG",
        meetUpDate: "12/12/2012",
        meetUpLocation: "Quills"
    },
    {
        title: "Children Playing Before a Statue of Hercules",
        author: "David Sedaris",
        genre: "Fiction",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Children_Playing_Before_a_Statue_of_Hercules.jpg",
        meetUpDate: "01/18/2013",
        meetUpLocation: "Puccini's"
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Young Adult",
        bookCover: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
        meetUpDate: "02/15/2013",
        meetUpLocation: "Amanda's House"
    }
]

// appends book array to #bookCard element in HTML
$('#bookCard').append(books);

// loops through book array, then calls buildBookCard function to create book cards
function createBookCards (listOfBooks){
    listOfBooks.forEach(function(book){
        buildBookCard(book);
    });

};

// Creates card elements for bookcards 
function buildBookCard(book){
    var card = '<div class="card border-dark mb-3">' + 
                '<img class="card-img-top img-fluid" src="' + book.bookCover + '" alt="' + book.title + '">' +
                '<div class="card-body text-center">' +
                    '<h5>' + book.title + '</h5>' +
                    '<p class="card-text">' + book.author + '</p>' +
                    '<p class="card-text">' + book.meetUpLocation + '</p>' +
                    // '<a data-toggle="modal" href="#' + name + 'Modal" class="card-link">Learn about ' + name + '</a>' +
                '</div>' +
                '<div class="card-footer">' + book.meetUpDate + '</div>' +
            '</div>';
    
    $('#bookCard').append(card);
}

// All books appear on page when first loaded
createBookCards(books);

// filters cards on the page based on button selection
$('button').click(function(){
    var bookGenre = $(this).text();
    if (bookGenre === "All"){
        $('#bookCard').empty();
        createBookCards(books);
    } else {
        var filteredBooks = books.filter(function (val){
            return val.genre === bookGenre; 
        })
        $('#bookCard').empty();
        createBookCards(filteredBooks);
    }; 
   
});

$(function() {
    $('.card-img-top').matchHeight();
});

