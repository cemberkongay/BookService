var ViewModel = function () {
    var self = this;
    self.books = ko.observableArray();
    self.error = ko.observable();

    var booksUrl = '/api/books';

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

    getBooks();
};

ko.applyBindings(new ViewModel());