const { Router } = require("express");
const { authMiddleware, getUser } = require("../../zodMiddleware");
const { default: mongoose } = require("mongoose");
const { Account } = require("../../db");
const router = Router();


// Applications must ensure that only one thread at a time executes these operations in a client session.


// Bad Solution
// router.post("/transfer", async (req, res) => {
    
    
//     const { amount, to } = req.body;

//     const account = await Account.findOne({
//         userId: req.userId
//     });

//     if (account.balance < amount) {
//         return res.status(400).json({
//             message: "Insufficient balance"
//         })
//     }

//     const toAccount = await Account.findOne({
//         userId: to
//     });

//     if (!toAccount) {
//         return res.status(400).json({
//             message: "Invalid account"
//         })
//     }

//     await Account.updateOne({
//         userId: req.userId
//     }, {
//         $inc: {
//             balance: -amount
//         }
//     })

//     await Account.updateOne({
//         userId: to
//     }, {
//         $inc: {
//             balance: amount
//         }
//     })

//     res.json({
//         message: "Transfer successful"
//     })

// });

router.post ("/" , authMiddleware,getUser ,async (req,res,next)=>{

    const session = await mongoose.startSession(); // Correct way to start a session
    try{

    session.startTransaction()
    const {amount , to } = req.body;


    const user= res.locals.user


const from =user.userId
console.log(from)
    const fromAccount = await Account.findOne ({
        userId : from
    }).session (session)
    if (!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction()
        return res.status (400).json({msg:"insufficient balance or account dosent exists"})
    }
    const toAccount = await Account.findOne({
        userId:to
    }).session(session)
    if (!toAccount){
    await session.abortTransaction()
    return res.status (400).json({msg:"account dosent exists"})
}

await Account.updateOne({userId : from},{$inc:{balance: -amount}}).session(session)
await Account.updateOne({userId : to},{$inc:{balance: amount}}).session(session)
await session.commitTransaction()
res.json({msg:'transaction complete'})
}
catch(err){
await session.abortTransaction()    
    return res.status (400).json({msg:"the transaction not complete",err:err})
}

})

module.exports = router;
