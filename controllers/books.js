let mongoose = require('mongoose');
var Book = require('./../storage/models/book');

exports.list_all_books = function(req,res){
    Book.find({},function(err,book){
        if (err)
           res.send(err);
        res.render('index',{
            'title':'BookStore',
            'bookList':book
        });
    }).where('quantity').gt(1);
};

exports.update_a_book = function(req,res){
    let update_book = new Book(req.body);
    update_book.save(function(err,book){
        if (err)
           res.send(err);
        res.json(book);
    });
};

