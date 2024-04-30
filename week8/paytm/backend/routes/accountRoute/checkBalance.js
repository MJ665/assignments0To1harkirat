const { Router } = require("express");
const router = Router();
const {Account } = require ("../../db")
const {authMiddleware,getUser}= require("../../zodMiddleware")


router.get("/", authMiddleware, getUser,async (req, res) => {
    const decode = res.locals.decode
    const user= res.locals.user
        const account = await Account.findOne({
            userId: user.userId
        });
    
        res.json({
            accountDetails:account,
            userDetail:user,
            balance: account.balance

        })
    });


module.exports = router;
