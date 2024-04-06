
const {jwtPassword}= require("../db/index")
const jwt = require("jsonwebtoken")
// Middleware for handling auth
async function adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const token = await req.headers.authorization
        const CleanedToken = await token.split(" ")

        const decode = await jwt.verify(CleanedToken[1],jwtPassword)
        next()


    }
    catch (err){res.status (400).json({err:"error while verification with jwt",msg:err})}
}

module.exports = adminMiddleware;