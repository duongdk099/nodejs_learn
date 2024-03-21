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

exports.updateWood = async (req, res) => {
  const { id } = req.params;
  const pathname = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  // console.log(JSON.parse(req.body));
  try {
    const wood = await Wood.findByPk(id);
    console.log(req.body.datas);
    let newWood = {
      ...JSON.parse(req.body.datas),
      image: pathname
    };
    console.log(newWood);
    if (wood) {
      await wood.update(newWood);
      res.status(200).json(wood);
    } else {
      res.status(404).json({ error: "Wood not found" });
    }
  } catch (error) {
    console.error("Something wrong happened while updating:", error);
    res
      .status(500)
      .send("The server is not responding. Please try again later.");
  }
};

exports.deleteWood = async (req, res) => {
  const { id } = req.params;
  try {
    const wood = await Wood.findByPk(id);
    if (wood) {
      await wood.destroy();
      res.status(200).json(wood);
    } else {
      res.status(404).json({ error: "Wood not found" });
    }
  } catch (error) {
    console.error("Something wrong happened while deleting:", error);
    res
      .status(500)
      .send("The server is not responding. Please try again later.");
  }
}