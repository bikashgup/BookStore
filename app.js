const express = require("express");
const path = require('path');

// let books = require('./storage/models/book');
// let payments = require('./storage/models/payment');
// let users = require('./storage/models/users');

const InitiateMongoServer = require('./storage/db');
InitiateMongoServer();

const bookRouter = require('./routes/books');
const paymentRouter = require('./routes/payment');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use(express.static(path.join(__dirname , 'node_modules/bootstrap/dist/js')));
app.use(express.json());



app.use('/', bookRouter);
app.use('/pay', paymentRouter);
 

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
