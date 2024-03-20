const { Wood } = require("../models");
exports.readAllWoods = async (req, res) => {
  try {
    console.log(Wood);
    const woods = await Wood.findAll();
    res.status(200).json(woods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.readByHardness = async (req, res) => {
  const { hardness } = req.params;
  try {
    const woods = await Wood.findAll({
      where: {
        hardness: hardness,
      },
    });

    res.status(200).json(woods);
  } catch (error) {
    console.error("Something wrong happened while searching:", error);
    res
      .status(500)
      .send("The server is not responding. Please try again later.");
  }
};
