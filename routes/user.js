const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.get("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/getAllUsers", userController.getAllUsers);

router.post("/createUser", userController.createUser);

router.put("/updateUser", userController.updateUser);

router.delete("/deleteUser", userController.deleteUser);

module.exports = router;
