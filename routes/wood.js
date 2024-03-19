const express = require("express");

const router = express.Router();

const woodController = require("../controllers/wood");

router.get("/", (req, res) => {
  res.send("Welcome to Wood page");
});

router.get("/getAllWoods", woodController.getAllWoods);

router.post("/createWood", woodController.createWood);

router.put("/updateWood", woodController.updateWood);

router.delete("/deleteWood", woodController.deleteWood);

module.exports = router;
