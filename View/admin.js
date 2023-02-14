const express = require("express");
const router = express.Router();
const {adminInfo,adminSalary,textXyz} = require('../controller/Admin')  

router.get('/admininfo', adminInfo);
router.get('/adminsalary', adminSalary);
router.get('/testxyz', textXyz);

module.exports = router;
