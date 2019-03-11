
// var books = [
//     {
//         title: "Extremely Loud and Incredibly Close",
//         author: "Jonathan Safran Foer",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/0/05/Extremely_loud_and_incredibly_close_large.JPEG",
//         meetUpDate: "12/12/2012",
//         meetUpLocation: "Quills"
//     },
//     {
//         title: "Children Playing Before a Statue of Hercules",
//         author: "David Sedaris",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Children_Playing_Before_a_Statue_of_Hercules.jpg",
//         meetUpDate: "01/18/2013",
//         meetUpLocation: "Puccini's"
//     },
//     {
//         title: "The Fault in Our Stars",
//         author: "John Green",
//         genre: "Young Adult",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
//         meetUpDate: "02/15/2013",
//         meetUpLocation: "Amanda's House"
//     },
//     {
//         title: "The Paris Wife",
//         author: "Paula McLain",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Paris_Wife_book_cover.jpg",
//         meetUpDate: "03/22/2013",
//         meetUpLocation: "Carly's House"
//     },
//     {
//         title: "Hitchhiker's Guide to the Galaxy",
//         author: "Douglas Adams",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
//         meetUpDate: "06/07/2013",
//         meetUpLocation: "Heine Brothers"
//     },
//     {
//         title: "Wonder",
//         author: "R. J. Palacio",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Wonder_Cover_Art.png/246px-Wonder_Cover_Art.png",
//         meetUpDate: "11/14/2013",
//         meetUpLocation: "Mrs. Potter’s"
//     },
//     {
//         title: "Blindness",
//         author: "Jose Saramago",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1528481068l/40495148.jpg",
//         meetUpDate: "01/16/2014",
//         meetUpLocation: "El Camino"
//     },
//     {
//         title: "Gone Girl",
//         author: "Gillian Flynn",
//         genre: "Mystery/Thriller",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Gone_Girl_%28Flynn_novel%29.jpg/220px-Gone_Girl_%28Flynn_novel%29.jpg",
//         meetUpDate: "02/20/2014",
//         meetUpLocation: "Grape Leaf"
//     },
//     {
//         title: "This is Where I Leave You",
//         author: "Jonathan Tropper",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1467397162l/6224935.jpg",
//         meetUpDate: "03/20/2014",
//         meetUpLocation: "Simply Thai"
//     },
//     {
//         title: "Maze Runner",
//         author: "James Dashner",
//         genre: "Young Adult",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Maze_Runner_cover.png/220px-The_Maze_Runner_cover.png",
//         meetUpDate: "04/24/2014",
//         meetUpLocation: "Silver Dollar"
//     },
//     {
//         title: "Car Sick",
//         author: "John Waters",
//         genre: "Nonfiction",
//         bookCover: "https://images.gr-assets.com/books/1396825449l/18490657.jpg",
//         meetUpDate: "07/24/2014",
//         meetUpLocation: "Feast & Comfy Cow"
//     },
//     {
//         title: "Sleep Donation",
//         author: "Karen Russell",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1393258037l/20454977.jpg",
//         meetUpDate: "08/24/2014",
//         meetUpLocation: "Holy Grale"
//     },
//     {
//         title: "The History of Love",
//         author: "Nicole Krauss",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/f/f9/Histoflove.jpg",
//         meetUpDate: "09/30/2014",
//         meetUpLocation: "Boombozz"
//     },
//     {
//         title: "The Moon is a Harsh Mistress",
//         author: "Robert A. Heinlein",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/The_Moon_Is_A_Harsh_Mistress_%28book%29.jpg/220px-The_Moon_Is_A_Harsh_Mistress_%28book%29.jpg",
//         meetUpDate: "01/25/2015",
//         meetUpLocation: "Sister’s Tea Parlor"
//     },
//     {
//         title: " A Heartbreaking Work of Staggering Genius",
//         author: "Dave Eggers",
//         genre: "Nonfiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Heartbreaking_Work_Dave_Eggers.jpg/220px-Heartbreaking_Work_Dave_Eggers.jpg",
//         meetUpDate: "02/26/2015",
//         meetUpLocation: "Coals Artisan Pizza"
//     },
//     {
//         title: "Wild",
//         author: "Cheryl Strayed",
//         genre: "Nonfiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/WildCoverFromAuthorsWebsite.JPG/220px-WildCoverFromAuthorsWebsite.JPG",
//         meetUpDate: "04/15/2015",
//         meetUpLocation: "Havana Rumba"
//     },
//     {
//         title: "The Girl on the Train",
//         author: "Paula Hawkins",
//         genre: "Mystery/Thriller",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/The_Girl_On_The_Train_%28US_cover_2015%29.png/220px-The_Girl_On_The_Train_%28US_cover_2015%29.png",
//         meetUpDate: "05/18/2015",
//         meetUpLocation: "Wild Rita's"
//     },
//     {
//         title: "Modern Romance",
//         author: "Aziz Ansari & Eric Linenberg",
//         genre: "Nonfiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Modern_Romance_-_An_Investigation.png/220px-Modern_Romance_-_An_Investigation.png",
//         meetUpDate: "08/26/2015",
//         meetUpLocation: "Against the Grain"
//     },
//     {
//         title: " You’re Never Weird on the Internet… Almost ",
//         author: "Felicia Day",
//         genre: "Nonfiction",
//         bookCover: "https://images.gr-assets.com/books/1440565049l/23705512.jpg",
//         meetUpDate: "09/30/2015",
//         meetUpLocation: "Craft House"
//     },
//     {
//         title: "Yes Please",
//         author: "Amy Poehler",
//         genre: "Nonfiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Yes_Please_book_cover.png/220px-Yes_Please_book_cover.png",
//         meetUpDate: "10/21/2015",
//         meetUpLocation: "Milkwood"
//     },
//     {
//         title: "Dr. Sleep",
//         author: "Stephen King",
//         genre: "Horror",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Doctor_Sleep.jpg/200px-Doctor_Sleep.jpg",
//         meetUpDate: "12/15/2015",
//         meetUpLocation: "Game"
//     },
//     {
//         title: "Zen and the Art of Motorcycle Maintenance",
//         author: "Robert M. Pirsig",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Zen_motorcycle.jpg/220px-Zen_motorcycle.jpg",
//         meetUpDate: "02/03/2016",
//         meetUpLocation: "Monnik"
//     },
//     {
//         title: "You Too Can Have a Body Like Mine",
//         author: "Alexandra Kleeman",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1433173755l/23461003.jpg",
//         meetUpDate: "03/09/2016",
//         meetUpLocation: "Annie’s Cafe"
//     },
//     {
//         title: "The Japanese Lover",
//         author: "Isabel Allende",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1501991754l/25152052.jpg",
//         meetUpDate: "04/21/2016",
//         meetUpLocation: "The Hub"
//     },
//     {
//         title: "Me Before You",
//         author: "Jojo Moyes",
//         genre: "Romance",
//         bookCover: "https://upload.wikimedia.org/wikipedia/commons/2/20/%27Me_Before_You%27.jpg",
//         meetUpDate: "06/15/2016",
//         meetUpLocation: "Skyline Chili (then saw the movie)"
//     },
//     {
//         title: "The Thirteenth Tale",
//         author: "Diane Setterfield",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/d/df/Thirteenthtale.jpg",
//         meetUpDate: "08/24/2016",
//         meetUpLocation: "Manny & Merle"
//     },
//     {
//         title: "Ready Player One",
//         author: "Ernest Cline",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg",
//         meetUpDate: "08/24/2016",
//         meetUpLocation: "Manny & Merle"
//     },
//     {
//         title: "The Leftovers",
//         author: "Tom Perrotta",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/a/a8/The_Leftovers_cover.jpg",
//         meetUpDate: "09/26/2016",
//         meetUpLocation: "The Post"
//     },
//     {
//         title: "Trigger Warning: Short Fictions and Disturbances",
//         author: "Neil Gaiman",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://images.gr-assets.com/books/1415036119l/22522808.jpg",
//         meetUpDate: "10/18/2016",
//         meetUpLocation: "Gasthaus"
//     },
//     {
//         title: "The Mothers",
//         author: "Brit Bennett",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1460652458l/28815371.jpg",
//         meetUpDate: "12/14/2016",
//         meetUpLocation: "Brooklyn and the Butcher"
//     },
//     {
//         title: "Why We Broke Up",
//         author: "Daniel Handler",
//         genre: "Young Adult",
//         bookCover: "https://images.gr-assets.com/books/1348728685l/10798418.jpg",
//         meetUpDate: "01/25/2017",
//         meetUpLocation: "Finns Southern Kitchen"
//     },
//     {
//         title: "The Things We Wish Were True",
//         author: "Marybeth Mayhew Whalen",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1459415613l/29057887.jpg",
//         meetUpDate: "03/02/2017",
//         meetUpLocation: "Vietnam Kitchen"
//     },
//     {
//         title: "Bellman & Black",
//         author: "Diane Setterfield",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1384157600l/17571907.jpg",
//         meetUpDate: "04/2017",
//         meetUpLocation: "The Manhattan Project"
//     },
//     {
//         title: "Hag-seed",
//         author: "Margaret Atwood",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1463887982l/28588073.jpg",
//         meetUpDate: "05/23/2017",
//         meetUpLocation: "Migo"
//     },
//     {
//         title: "The Roanoke Girls",
//         author: "Amy Engel",
//         genre: "Mystery/Thriller",
//         bookCover: "https://images.gr-assets.com/books/1489050287l/30689335.jpg",
//         meetUpDate: "06/14/2017",
//         meetUpLocation: "Garage Bar"
//     },
//     {
//         title: "The Alice Network",
//         author: "Kate Quinn",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1492238040l/32051912.jpg",
//         meetUpDate: "07/31/2017",
//         meetUpLocation: "Dundee Tavern"
//     },
//     {
//         title: "Warbreaker",
//         author: "Brandon Sanderson",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Warbreaker_cover.jpg",
//         meetUpDate: "08/31/2017",
//         meetUpLocation: "Chik'n & Mi"
//     },
//     {
//         title: "The Amazing Adventures of Kavalier & Clay",
//         author: "Michael Chabon",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/e/ed/Amazingadventuresbook.jpg",
//         meetUpDate: "09/27/2017",
//         meetUpLocation: "The Post"
//     },
//     {
//         title: "The Girls",
//         author: "Emma Cline",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1492065338l/26893819.jpg",
//         meetUpDate: "11/02/2017",
//         meetUpLocation: "Come Back Inn"
//     },
//     {
//         title: "Norse Mythology",
//         author: "Neil Gaiman",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://images.gr-assets.com/books/1516128292l/37903770.jpg",
//         meetUpDate: "02/01/2018",
//         meetUpLocation: "Hilltop Tavern"
//     },
//     {
//         title: "Heart-Shaped Box",
//         author: "Joe Hill",
//         genre: "Horror",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/c/cd/HSBHill.jpg",
//         meetUpDate: "02/01/2018",
//         meetUpLocation: "Hilltop Tavern"
//     },
//     {
//         title: "Eleanor Oliphant Is Completely Fine",
//         author: "Gail Honeyman",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1493724347l/31434883.jpg",
//         meetUpDate: "03/08/2018",
//         meetUpLocation: "Oskar's Slider Bar"
//     },
//     {
//         title: "Little Fires Everywhere",
//         author: "Celeste Ng",
//         genre: "Fiction",
//         bookCover: "https://images.gr-assets.com/books/1522684533l/34273236.jpg",
//         meetUpDate: "03/08/2018",
//         meetUpLocation: "Monnik"
//     },
//     {
//         title: "Dark Matter",
//         author: "Blake Crouch",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://images.gr-assets.com/books/1472119680l/27833670.jpg",
//         meetUpDate: "05/08/2018",
//         meetUpLocation: "Butchertown Pizza Hall"
//     },
//     {
//         title: "The Lying Game",
//         author: "Ruth Ware",
//         genre: "Mystery/Thriller",
//         bookCover: "https://images.gr-assets.com/books/1497632504l/32895291.jpg",
//         meetUpDate: "06/07/2018",
//         meetUpLocation: "Mac's Dough House"
//     },
//     {
//         title: "Elizabeth is Missing",
//         author: "Emma Healey",
//         genre: "Mystery/Thriller",
//         bookCover: "https://images.gr-assets.com/books/1388883559l/18635113.jpg",
//         meetUpDate: "07/10/18",
//         meetUpLocation: "Amici Cafe"
//     },
//     {
//         title: "All the Bright Places",
//         author: "Jennifer Niven",
//         genre: "Young Adult",
//         bookCover: "https://images.gr-assets.com/books/1404331702l/18460392.jpg",
//         meetUpDate: "08/09/2018",
//         meetUpLocation: "North End Cafe"
//     },
//     {
//         title: "Still Lives",
//         author: "Maria Hummel",
//         genre: "Mystery/Thriller",
//         bookCover: "https://images.gr-assets.com/books/1536677752l/36681184.jpg",
//         meetUpDate: "09/06/2018",
//         meetUpLocation: "Red Top Gourmet Hotdogs"
//     },
//     {
//         title: "Children of Blood and Bone",
//         author: "Tomi Adeyemi",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://images.gr-assets.com/books/1516127989l/34728667.jpg",
//         meetUpDate: "10/09/2018",
//         meetUpLocation: "Eiderdown"
//     },
//     {
//         title: "The Hate U Give",
//         author: "Angie Thomas",
//         genre: "Young Adult",
//         bookCover: "https://images.gr-assets.com/books/1535002553l/32075671.jpg",
//         meetUpDate: "11/13/2018",
//         meetUpLocation: "The Post"
//     },
//     {
//         title: "Roomies",
//         author: "Christina Lauren",
//         genre: "Romance",
//         bookCover: "https://images.gr-assets.com/books/1492478146l/34466910.jpg",
//         meetUpDate: "12/09/2018",
//         meetUpLocation: "Amanda's house - Game Night!"
//     },
//     {
//         title: "Killers of the Flower Moon",
//         author: "David Grann",
//         genre: "Nonfiction",
//         bookCover: "https://images.gr-assets.com/books/1470699853l/29496076.jpg",
//         meetUpDate: "01/22/2019",
//         meetUpLocation: "Longboard's Taco & Tiki"
//     },
//     {
//         title: "The Guernsey Literary and Potato Peel Pie Society",
//         author: "Mary Ann Shaffer & Annie Barrows",
//         genre: "Fiction",
//         bookCover: "https://upload.wikimedia.org/wikipedia/en/6/60/The_Guernsey_Literary_and_Potato_Peel_Pie_Society.jpg",
//         meetUpDate: "03/01/2019",
//         meetUpLocation: "New Wave Burritos"
//     },
//     {
//         title: "Space Opera",
//         author: "Catherynne M. Valente",
//         genre: "Sci-Fi/Fantasy",
//         bookCover: "https://images.gr-assets.com/books/1518017807l/24100285.jpg",
//         meetUpDate: "04/05/2019",
//         meetUpLocation: "Come Back Inn"
//     }

// ]

fetch("https://cgrimaud.github.io/bookclub/books.json").then(function(response) {
    return response.json()
    })
    .then(function(books) {
        myglobalvarbooks = books
})
    


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
                        '<p class="card-text">' + 'By: ' + book.author + '</p>' +
                        '<p class="card-text">' + book.meetUpLocation + '</p>' +
                        // '<a data-toggle="modal" href="#' + name + 'Modal" class="card-link">Learn about ' + name + '</a>' +
                    '</div>' +
                    '<div class="card-footer text-center">' + book.meetUpDate + '</div>' +
                '</div>';
        
        $('#bookCard').append(card);
    }

    function countBooks(book){
        $('.genreBooksRead').text(book.length + " book");
    }

    // All books appear on page when first loaded
    createBookCards(books);
    countBooks(books);


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

    // loop through array, count number of objects, r
    




