const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    //decoded the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;
    //save userId in req.auth var
    req.auth = {
      userId,
    };
    next();
  } catch (err) {
    res.status(401).json({
      error: "Unauthorized request!",
      details: err.message,
    });
  }
};
