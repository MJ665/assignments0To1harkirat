const { Router } = require("express");
const { authMiddleware } = require("../../zodMiddleware");
const { default: mongoose } = require("mongoose");
const { Account } = require("../../db");
const router = Router();

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

router.post ("/" , authMiddleware ,async (req,res,next)=>{

    try{
const session = await mongoose.startSession(); // Correct way to start a session

    session.startTransaction()
    const {amount , to,from } = req.body;
    const fromAccount = await Account.findOne ({
        userId : from
    }).session (session)
    if (!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction()
        return res.status (400).json({msg:"insufficient balance"})
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
    return res.status (400).json({msg:"the transaction not complete",err:err})
}

})

module.exports = router;
