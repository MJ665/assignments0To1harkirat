

const { Router } = require("express");
const router = Router();



const userRouter = require("./userRoute/index.js");
router.use("/user", userRouter);

const accountRoute = require("./accountRoute/index.js");
router.use("/account", accountRoute);



module.exports = router;