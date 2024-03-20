const express = require("express");

const router = express.Router();

const woodController = require("../controllers/wood");

const auth = require("../middleware/auth");

router.get("/", woodController.readAllWoods);

router.get('/:hardness',auth, woodController.readByHardness);

module.exports = router;
