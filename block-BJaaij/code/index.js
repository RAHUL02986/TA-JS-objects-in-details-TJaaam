class Book{
    cunstroctor(title,category,author){
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = flase;
        this.finishedData = null;
    }
    markBookAsRead(index){
        this.isRead = true;
    }
}


class BookList{
    constructor(){
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(Books = []){
        this.books= this.books.concat(Book);
        return this.books;
    }
    getCurrentBooks(){
        return this.books[this.currentIndexBook];
    }
    getNextBook(){
        return this.books[this.currentBookIndex + 1];
    }
    getPrevBook(){
        return this.books[this.currentBookIndex - 1]
    }
    changeCurrentBook(index){
        this.currentIndexBook = index;
        return this.currentBookIndex;
    }
}

let book1 = new Book("To kill a mockingbird","non fiction","harper lee");
let book2 = new Book("To kill a kingbird"," fiction","john cartor");
let book3 = new Book("javaScript","language","ankit");
let book4 = new Book("Python","coading","suraj");

let library = new BookList();
library.add([book1,book2,book3,book4]);
