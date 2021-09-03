var express = require('express');
var router = express.Router();
const {Login,GetAccessToken} = require('../controllers/login');
const auth_middleware = require("../middleware/auth.middleware");
router.post('/login',Login);
router.post('/refreshToken',auth_middleware.verifyRefreshToken,GetAccessToken);
module.exports = router;