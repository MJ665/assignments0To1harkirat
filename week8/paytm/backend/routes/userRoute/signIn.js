const { Router } = require("express");
const router = Router();

router.get("/",async (req, res) => {
  res.send("Hello from signIn router");
});

module.exports = router;
