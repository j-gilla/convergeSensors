const data = require("express").Router();
const all = require("./all");
const single = require("./single");

data.get("/", all);
data.get("/sensors/:sensorId", single);

module.exports = data;
