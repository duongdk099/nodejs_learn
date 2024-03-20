const { Wood } = require("../models/wood");
exports.readAllWoods = (req, res) => {
  try {
    const woods = Wood.findAll();
    res.status(200).json(woods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
