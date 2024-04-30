const { Router } = require("express");
const router = Router();

const authMiddleware = require("../../zodMiddleware")


    router.get("/", authMiddleware, async (req, res) => {
        const account = await Account.findOne({
            userId: req.headers["userid"]
        });
    
        res.json({
            balance: account.balance
        })
    });


module.exports = router;
