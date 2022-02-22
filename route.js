let logger = require("../logger/logger.js");
let helper = require("../util/helper.js");
let formatter =require("../validator/formatter.js")
let lo_dash= require("../lodashfolder/lodashOperation.js")

const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
   logger.welcome()
   console.log(logger.url)
   helper.printDate()
   helper.printMonth()
   helper.getBatchInfo()
   formatter.trim()
   formatter.changetoLowerCase()
   formatter.changetoUpperCase()

    res.send('Welcome to my application. I am Srushti Kokare and i am part of Functionup');
});

router.get('/hello', function (req, res){
   lo_dash.chunkArr()
   lo_dash.tailArr()
   lo_dash.unionArr()
   lo_dash.fromPairArr()

    res.send('this is hello route')
});
module.exports = router;