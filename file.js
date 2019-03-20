

// This is the global var books
var books = [];

    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.open('GET', 'books.json', true); 
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
          callback(xobj.responseText);
          }
        };
        xobj.send(null);
      }

      function init() {
        loadJSON(function(response) {
            books = JSON.parse(response)

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

 
    




