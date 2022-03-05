const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")



router.get("/getBookdata", UserController.getUsersData)

module.exports = router;