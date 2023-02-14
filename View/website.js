const express = require("express");
const router = express.Router();
const {ReactHome} = require("../controller/Website");

router.get('/wadmin',ReactHome);

module.exports = router;