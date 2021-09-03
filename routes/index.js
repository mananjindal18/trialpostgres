const express = require("express");
const router = express.Router();

router.use("/api/v1/user",require("./user.route") );
router.use("/api/v1/login",require("./login.route") );
module.exports = router;
