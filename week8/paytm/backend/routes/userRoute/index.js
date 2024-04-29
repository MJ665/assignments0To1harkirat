

const { Router } = require("express");
const router = Router();


const signInRouter = require("./signIn.js");
router.use("/signIn", signInRouter);

const signUpRouter = require("./signUp.js");
router.use("/signUp",signUpRouter);


module.exports = router;