const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )//public api...any 1 can run...cz no validation in controller..

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.mid1,middleware.authorise,userController.getUserData)
router.put("/users/:userId",middleware.mid1,middleware.authorise,userController.updateUser)
router.delete("/users/:userId",middleware.mid1,middleware.authorise,userController.userDelete)


router.post("/users/:userId/posts",middleware.mid1,middleware.authorise,userController.postMessage)
module.exports = router;