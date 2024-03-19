const express = require("express");

const app = express();

const router = require("./routes/index.js");
app.use("/api", router);

const db = require("./models/index.js");
db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));


module.exports = app;