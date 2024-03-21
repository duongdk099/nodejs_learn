const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const router = require("./routes/index.js");
const corsOptions = {
    origin: "http://localhost:8080",
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const db = require("./models/index.js");
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(err));

module.exports = app;
