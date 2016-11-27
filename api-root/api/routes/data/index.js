const data = require("express").Router();
const all = require("./all");
const single = require("./single");

data.get("/", all);
data.get("/sensor/:sensorId", single);

module.exports = data;
