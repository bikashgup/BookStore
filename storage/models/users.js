let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    image: { type: String, default: 'default.png' },
});

module.exports = mongoose.model('Users',userSchema);