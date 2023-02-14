const express = require("express");
const router = express.Router();
const {tested} = require('../controller/Test');

router.get('/testing',tested);

module.exports = router;