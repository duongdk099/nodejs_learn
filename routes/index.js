const express = require("express");
const router = express();
const userRoutes = require("./user.js"); 
const woodRoutes = require("./wood.js");

router.use("/user", userRoutes);
router.use("/wood", woodRoutes);

module.exports = router;
