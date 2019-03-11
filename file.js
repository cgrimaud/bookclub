
// This is the global var books
var books = [];

    function getBooks() {
        return fetch("https://cgrimaud.github.io/bookclub/books.json")
            .then(function(response) {return response.json();})
    }

   
    function init() {
        getBooks().then(function(books) {
            // We are assigning the value returned by getbooks to
            // to the global var books
            this.books = books;

            // All books appear on page when first loaded
            createBookCards(books);
            countBooks(books);

        });
    }
    
    init();

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
                        '<p class="card-text">' + 'By: ' + book.author + '</p>' +
                        '<p class="card-text">' + book.meetUpLocation + '</p>' +
                        // '<a data-toggle="modal" href="#' + name + 'Modal" class="card-link">Learn about ' + name + '</a>' +
                    '</div>' +
                    '<div class="card-footer text-center">' + book.meetUpDate + '</div>' +
                '</div>';
        
        $('#bookCard').append(card);
    }

    function countBooks(book){
        $('.genreBooksRead').text(book.length + " books");
    }



    // filters cards on the page based on button selection
    $('.dropdown-item').click(function(){
        var bookGenre = $(this).text();
        if (bookGenre === "All"){
            $('#bookCard').empty();
            $('.genreHeader').text("All Books");
            countBooks(books);
            createBookCards(books);
        } else {
            var filteredBooks = books.filter(function (val){
                return val.genre === bookGenre; 
            })
            $('#bookCard').empty();
            $('.genreHeader').text(bookGenre);
            countBooks(filteredBooks);
            createBookCards(filteredBooks);
        }; 
    
    });

    // Changes text of dropdown list button based on selection
    $('.dropdown-menu').on('click', 'a', function (){
        var genreSelection = $(this).text();
        $('#dropdownMenuLink').text(genreSelection);
    })

 
    




