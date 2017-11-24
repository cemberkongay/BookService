var ViewModel = function () {
    var self = this;
    self.books = ko.observableArray();
    self.error = ko.observable();
    self.detail = ko.observable();
    self.authors = ko.observableArray();
    self.newBook = {
        Author: ko.observable(),
        Genre: ko.observable(),
        Price: ko.observable(),
        Title: ko.observable(),
        Year: ko.observable()
    }

    var booksUrl = '/api/books/';
    var authorsUrl = '/api/authors/';

    function ajaxHelper(url, method, data) {
        self.error('');
        return $.ajax({
            type: method,
            url: url,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getBooks() {
        ajaxHelper(booksUrl, 'GET').done(function (data) {
            self.books(data);
        });
    }

    self.getBookDetail = function (id) {
        ajaxHelper(booksUrl + id.Id, 'GET').done(function (data) {
            self.detail(data);
        });
    }

    function getAuthors(){
        ajaxHelper(authorsUrl, 'GET').done(function (data) {
            self.authors(data);
        });
    }

    self.addBook = function (formElement) {
        var book = {
            AuthorId: self.newBook.Author().Id,
            Title: self.newBook.Title(),
            Year: self.newBook.Year(),
            Genre: self.newBook.Genre(),
            Price: self.newBook.Price(),
        };

        ajaxHelper(booksUrl, 'POST', book).done(function (id) {
            self.books.push(id);
        });
    }

    getAuthors();
    getBooks();
    
};

ko.applyBindings(new ViewModel());