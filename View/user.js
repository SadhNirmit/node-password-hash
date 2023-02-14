const express = require("express");
const router = express.Router();
const {userInfo} = require('../controller/User');

router.get('/userinfo',userInfo)

module.exports = router;
