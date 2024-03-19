const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to Wood page");
})

router.get("/getAllWoods", (req, res) => {
  res.send("You will have the woods here");
});

router.post("/createWood", (req, res) => {
  res.send("You will create a new wood here");
});

router.put("/updateWood", (req, res) => {
  res.send("You will update a wood here");
});

router.delete("/deleteWood", (req, res) => {
  res.send("You will delete a wood here");
});

module.exports = router;
