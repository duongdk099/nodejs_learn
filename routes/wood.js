const express = require("express");

const router = express.Router();

const woodController = require("../controllers/wood");

router.get("/", woodController.readAllWoods);

module.exports = router;
