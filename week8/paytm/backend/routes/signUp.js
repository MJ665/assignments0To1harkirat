const { Router } = require("express");
const router = Router();
const { signUpMiddleware } = require("../zodMiddleware");

router.post("/", signUpMiddleware, async (req, res) => {
  try {
    console.log("we entered in the SignUp");
    res.send("we successfully created the user");
  } catch (err) {
    res.status(400).json({
      msg: "Some error while user creation 3",
      err: err.message, // or err.toString() for a string representation of the error
    });
  }
});

module.exports = router;
