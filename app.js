require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yamljs");

const router = require("./routes/index.js");
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
};
const file  = fs.readFileSync('./docs/swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
