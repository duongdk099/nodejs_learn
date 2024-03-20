const express = require("express");

const router = express.Router();

const woodController = require("../controllers/wood");

router.get("/", woodController.readAllWoods);

router.get('/:hardness', woodController.readByHardness);

module.exports = router;
