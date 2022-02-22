const express = require('express');
const router = express.Router();

router.get('/movies/:The Shining', function(req, res) {
    let moviesName = req.params.TheShining
    console.log(moviesName)
    res.send(moviesName)
})




module.exports = router;