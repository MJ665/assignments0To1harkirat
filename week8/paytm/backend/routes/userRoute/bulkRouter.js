const {Router} = require("express")
const {User} = require("../../db")
const router = Router ()
router.get ("/",async (req,res)=>{



//     const filter = req.query.filter|| ""
//     try{
//  const userList = await User.find({
//         $or:[
//             {"firstName":{
//                 "$regex":filter,
//                  "$options":"i" // --->case insensitive search 
//             },"lastName":{
    //                 "$regex":filter,
    //                  "$options":"i" // --->case insensitive search 
//             }}
//         ]
//     })
    
// console.log(userList)
// return res.status(200).json({userList:userList})
//     }catch(err){ 
//         return res.status (400).json({msg:"bulk method did not work",err:err})
//     }






const filter = req.query.filter || ""
console.log(filter)
const filterRegexp = new RegExp (filter, "i") //---> i for case insensitive

try{
const userList = await User.find({

    $or:[
        {"firstName":filterRegexp},
        {"lastName":filterRegexp}
    ]
})
console.log(userList)
return res.json({msg:"got the list", userList:userList})
}catch(err){return res.status(400).json({msg:"bulk method did not work", err:err})}




})


module.exports=router