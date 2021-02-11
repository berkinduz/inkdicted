const mongoose = require('mongoose');

//herkese merhaba ben ege

const authorSchema = mongoose.Schema({
    name: {
        require: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Author = mongoose.model('Author',authorSchema);
module.exports = { Author }