const {User}= require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const userName = req.header.username
    const password = req.header.password
    User.find({
        username : userName,
        password:password
    }).then((value)=>{
        if(value){
            next()
        }else{
            res.status(400).json({msg:"either normal user dosent exits of password no match"})
        }
    })
}

module.exports = userMiddleware;