let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let objectID = mongoose.Schema.Types.ObjectId;

let PaymentSchema = new Schema({
    method: String,
    paymentId: String,
    payer: {
        type: objectID,
        ref:'users'
    },
    books:[{
        bookID:{
            type: objectID,
            ref: 'books'
        },
        name: String,
        quantity:{
            type: Number,
            min: 1,
            default: 1
        },
        price: Number,
        currency: Number
    }],
    bill:{
        total: Number,
        currency:String
    },
    status:{
        type:String,
        enum:["Paid", "InProgress", "Cancelled"]
    }
});

module.exports = mongoose.model('Payments', PaymentSchema);

