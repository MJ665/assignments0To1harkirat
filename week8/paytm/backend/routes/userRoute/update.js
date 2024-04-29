const {Router}= require("express")
const router = Router()

const {authMiddleware}= require("../../zodMiddleware")
const {updateUserCred}= require("../../zodMiddleware")
router.put("/",authMiddleware,updateUserCred,async (req,res,next)=>{
    const newToken = res.locals.newToken
    res.status (200).json({msg:"updated user successfully", newToken : newToken})

})




module.exports=router