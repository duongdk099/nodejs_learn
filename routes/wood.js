const express = require("express");
const multer = require("../middleware/multer");
const router = express.Router();

const woodController = require("../controllers/wood");

const auth = require("../middleware/auth");

router.get("/", auth, woodController.readAllWoods);

router.get("/:hardness", auth, woodController.readByHardness);

router.post("/", auth, multer, woodController.createWood);

router.put("/:id", auth, multer, woodController.updateWood);

router.delete("/:id", auth, multer, woodController.deleteWood);

module.exports = router;
