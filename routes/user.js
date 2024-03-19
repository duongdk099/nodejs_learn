const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to User page");
})

router.get("/getAllUsers", (req, res) => {
    res.send("You will have the users here");
});

router.post("/createUser", (req, res) => {
    res.send("You will create a new user here");
})

router.put("/updateUser", (req, res) => {
    res.send("You will update a user here");
})

router.delete("/deleteUser", (req, res) => {
    res.send("You will delete a user here");
})

module.exports = router;