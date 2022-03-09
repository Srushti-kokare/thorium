let jwt=require('jsonwebtoken')

let mid1=function(req,res,next){
    let xAuthToken = req.headers["x-auth-token"]
    if( xAuthToken != undefined){
        console.log("done")
        next()
    }
    else{
        res.send("request is missing a mandatory header")
    }
}

let authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
    let decodedToken = jwt.verify(token, 'srushti')
    console.log(decodedToken)

    if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    console.log(userLoggedIn)
    if (userToBeModified != userLoggedIn) { 
         res.send("User logged is not allowed to modify the requested users data")
    }
        console.log("done")
        next()
}
module.exports.mid1 = mid1;
module.exports.authorise = authorise;