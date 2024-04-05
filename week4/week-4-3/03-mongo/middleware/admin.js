
// Middleware for handling auth
const {Admin} = require ("../db/index")

async function adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userName = req.headers.username
    const password = req.headers.password
await Admin.findOne({
    username:userName,
    password:password
}).then((value)=>{
    if (value){
        next()
    }else{res.status(403).json({msg:"either admin user doset exists or wrong password"})}
})

}

module.exports = adminMiddleware;