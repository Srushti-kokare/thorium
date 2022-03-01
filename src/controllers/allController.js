
// 1. Write down the schemas for book and authors (keeping the data given below in mind). Also create the documents 
//(corresponding to the data given below) in your database.
// 2. CRUD operations. Write API's to do the following:
// Write create APIs for both books and authors ---> If author_id is not available then do not accept 
//the entry(in neither the author collection nor the books collection)
// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- 
//first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate.
// The second will be a find query aith author_id from previous query)
// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names 
///of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) 
//loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)






const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')

const createNewAuthor = async function (req,res) {
    const reqAuthor = req.body;
    const SavedData = await authorModel.create(reqAuthor)
    res.send( {msg : SavedData})
    
}

const createNewBook = async function (req,res) {
    const reqBook = req.body;
    const Saved = await bookModel.create(reqBook)
    res.send( {msg : Saved})
    
}

const allBooks = async function(req, res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id: id}).select({name:1})
    res.send( {msg:booksName})
}

const updatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})

    const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1, _id:0})

    res.send({msg:authorN, updatedPrice})

}

const authorsName = async function (req,res) {
    const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)
    // const allAuthorNames= id.map(x => {
    //     return authorModel.find({author_id:x}).select({author_name:1, _id:0})
    // })

    // res.send({msg:allAuthorNames})
    let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }

   const authorName = temp.flat()

  res.send({msg:authorName})
}

module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.allBooks = allBooks
module.exports.updatedBookPrice = updatedBookPrice
module.exports.authorsName = authorsName
