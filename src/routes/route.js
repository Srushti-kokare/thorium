const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



let players = [];

router.post('/players', function(req, res) {

    let player = req.body;
    let playerName = player.name
    for(let i = 0; i < players.length; i++){
        if(players[i].name == playerName){
            res.send('player already exist')
        }
    }
    players.push(player);
    console.log('here is the playter array',players);
    res.send(players);
});

router.post('/players/:playerName/bookings/:bookingId', function(req, res){
    let name = req.params.playerName
    let isPlayerPresent = false

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == name) {
        isPlayerPresent = true
        }
    }

    if(! isPlayerPresent){
        return res.send('player not present')
    }

    let booking = req.body
    let bookingId = req.params.bookingId
    for(let i = 0; i < players.length; i++){
        if(players[i].name == name) {
            let isBookingPresent = false
            for(let j = 0; j < players[i].bookings.length; j++){
                if(players[i].bookings[j]){
                    players[i].bookings.push(booking)
                }
            }
            
        }
    }

    res.send(players)

})

module.exports = router