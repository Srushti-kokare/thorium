
//Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. :
// 1 api to create a new book and another api to get the list of all books.
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true,
        unique : true
    },
    authorName : {
        type : String,
        required : true
    },
    catagory : {
        type : String,
        enum : ['Fiction', 'Comic', 'Mystery', 'Fantasy', 'Horror', 'Biography', 'Research', 'Spiritual', 'Motivational']
    },
    year : Number
}, {timestamps : true})

module.exports = mongoose.model('bookdetails',bookSchema);

