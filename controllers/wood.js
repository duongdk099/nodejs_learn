const { Wood } = require("../models");
const fs = require("fs");
const {results_with_links} = require("../outils/woodOutil");
exports.readAllWoods = async (req, res) => {
  try {
    let woods = await Wood.findAll();

    const { woodsWithLinks, links } = results_with_links(woods);

    res.status(200).json({
      woods: woodsWithLinks,
      links: links,
    });
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

    const { woodsWithLinks, links } = results_with_links(woods);

    res.status(200).json({
      woods: woodsWithLinks,
      links: links,
    });
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

    const { woodsWithLinks } = results_with_links([newWood]);

    res.status(201).json(woodsWithLinks);
  } catch (error) {
    console.error("Something wrong happened while creating:", error);
    res
      .status(500)
      .send("The server is not responding. Please try again later.");
  }
};

exports.updateWood = async (req, res) => {
  const { id } = req.params;

  try {
    const wood = await Wood.findByPk(id);
    let newWood = {
      ...JSON.parse(req.body.datas),
    };
    // If the wood exists, update it
    if (wood) {
      if (req.file) {
        const pathname = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;
        // If a new image is uploaded
        newWood.image = pathname;
        if (wood.image) {
          const link = "uploads/" + wood.image.split("/").pop();
          fs.unlink(link, (err) => {
            if (err) throw err;
          });
        }
      }

      const { woodsWithLinks } = results_with_links([newWood]);

      await wood.update(newWood);
      res.status(200).json(woodsWithLinks);
    } else {
      // If the wood doesn't exist, return an error
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
      if (wood.image) {
        const link = "uploads/" + wood.image.split("/").pop();
        fs.unlink(link, (err) => {
          if (err) throw err;
        });
      }
      await wood.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Wood not found" });
    }
  } catch (error) {
    console.error("Something wrong happened while deleting:", error);
    res
      .status(500)
      .send("The server is not responding. Please try again later.");
  }
};
