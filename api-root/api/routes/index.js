const routes = require("express").Router();
const data = require("./data");
const sensors = require("./senors");

routes.use("/data", data);
routes.use("/sensor", sensors);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

module.exports = routes;
