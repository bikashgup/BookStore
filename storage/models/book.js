let mongoose = require('mongoose');
let Schema = mongoose.Schema;
console.log("hi")
let BookSchema = new Schema({
    name: String,
    price: Number,
    currency: String,
    imageName: String,
    description: String,
    quantity: Number
});

module.exports = mongoose.model('books',BookSchema);