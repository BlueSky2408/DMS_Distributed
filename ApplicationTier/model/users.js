const mongoose = require('mongoose');

// Define the schema for the documents model
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
});

module.exports = mongoose.model('User', userSchema);
