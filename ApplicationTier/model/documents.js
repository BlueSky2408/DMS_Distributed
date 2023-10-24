const mongoose = require('mongoose');

// Define the schema for the documents model
const Schema = mongoose.Schema;
const docSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    dateModified: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Document', docSchema);
