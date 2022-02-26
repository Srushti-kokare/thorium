const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://srushti_kokare:srushti5198@cluster0.sybm5.mongodb.net/srushtidb?retryWrites=true&w=majority", {useNewUrlParser: true})
.then(() => console.log('Successfully connected to mongoDB 27017'))
.catch(err => console.log('Connection error'))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000));
})
