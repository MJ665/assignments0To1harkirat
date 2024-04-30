const { Router } = require("express");
const router = Router();
const {signInMiddleware} = require("../../zodMiddleware")
router.get("/",signInMiddleware,async (req, res) => {

  try {
    console.log("we entered in the signIn");
    const token = res.locals.token
    const user = res.locals.user
    res.status(200).json({msg:"you signed in generated you jwt token", token:token,user:user})

  } catch (err) {
    res.status(400).json({
      msg: "Some error while user creation 3",
      err: err.message, // or err.toString() for a string representation of the error
    });
  }
});

module.exports = router;
