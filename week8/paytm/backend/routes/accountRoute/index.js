

const { Router } = require("express");
const router = Router();


const transferRouter = require("./transfer.js");
router.use("/transfer", transferRouter);

const checkBalanceRouter = require("./checkBalance.js");
router.use("/checkBalance",checkBalanceRouter);


module.exports = router;