const {Wood} = require("../models/wood");
exports.getAllWoods = (req, res) => {
  res.send("You will have the woods here");
};

exports.createWood = (req, res) => {
  res.send("You will create a new wood here");
};

exports.updateWood = (req, res) => {
  res.send("You will update a wood here");
};

exports.deleteWood = (req, res) => {
  res.send("You will delete a wood here");
};
