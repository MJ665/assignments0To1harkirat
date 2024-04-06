const {jwtPassword} = require("../db/index")
const jwt = require("jsonwebtoken")
 async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
try {const token = await  req.headers.authorization
const cleanedToken = await  token.split(' ')
const decode = await jwt.verify(cleanedToken[1],jwtPassword)
next()}catch (err){res.status(400).json({err:"cant verify user jwt",msg:err})}
}

module.exports = userMiddleware;