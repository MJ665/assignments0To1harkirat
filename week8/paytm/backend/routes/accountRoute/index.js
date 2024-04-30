

const { Router } = require("express");
const router = Router();


const transferRouter = require("./transfer.js");
router.use("/transfer", transferRouter);

const checkBalanceRouter = require("./checkBalance.js");
router.use("/balance",checkBalanceRouter);


module.exports = router;