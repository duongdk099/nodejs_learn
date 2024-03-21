const { Wood } = require("../models");
exports.readAllWoods = async (req, res) => {
  try {
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

exports.createWood = async (req, res) => {
  const { name, type, hardness } = req.body;
  const pathname = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  try {
    const newWood = await Wood.create({
      ...JSON.parse(req.body.datas),
      image: pathname,
    });
    res.status(201).json(newWood);
  } catch (error) {
    console.error("Something wrong happened while creating:", error);
    res
      .status(500)
      .send("The server is not responding. Please try again later.");
  }
};
