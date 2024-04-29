

const { Router } = require("express");
const router = Router();


const signInRouter = require("./signIn.js");
router.use("/signIn", signInRouter);

const signUpRouter = require("./signUp.js");
router.use("/signUp",signUpRouter);

const upadteRouter = require("./update.js");
router.use("/update",upadteRouter);

const bulkRouter = require("./bulkRouter.js");
router.use("/bulk",bulkRouter);


module.exports = router;