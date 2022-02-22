//let obj = require("../movieList/movieList.js");
const express = require('express');
const router = express.Router();

router.get('/movies', function (req, res) {
    res.send('["3 idiots", "URI", "mimi", "masaan", "stree", "hungama"]');
});

router.get('/movies/:movieId', function (req, res) {
    let movieIndex=["3 idiots", "URI", "mimi", "masaan", "stree", "hungama"];
    let index = req.params.movieId;
    if (index>movieIndex.length-1){
        res.send("movie does not exists.");
    }
    else res.send(movieIndex[index]);
});

router.get('/films', function (req, res) {
    let movies = [{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }];
    res.send(movies);
});

router.get('/films/:filmId', function (req, res) {
    let movies = [{
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }];
       let flag = 0;
       let id = req.params.filmId;
       for (let i=0; i<movies.length; i++){
           if (id == movies[i].id){
            res.send(movies[i]);
            flag = 1;
            break;
           }
       }
       if (flag == 0)
           res.send("No movie exists with this id.");
    res.send(movies);
});

module.exports = router;
